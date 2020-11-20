const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const Profile = require("../../models/Profile");

// @route   GET api/profile/myprofile
// @desc    Get current user's profile
// @access  Private
router.get("/myprofile", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("department", "Please enter your current department")
        .not()
        .isEmpty(),
      check("position", "Please enter your current position").not().isEmpty(),
      check("about", "Please enter some details about yourself")
        .not()
        .isEmpty(),
      check("skills", "Please enter some of your specialized skills")
        .not()
        .isEmpty(),
      check("hobbies", "Please enter some of your current hobbies")
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { department, position, about, skills, hobbies } = req.body;

    // build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    department && (profileFields.department = department);
    position && (profileFields.position = position);
    about && (profileFields.about = about);
    skills &&
      (profileFields.skills = skills.split(",").map((skill) => skill.trim()));
    hobbies &&
      (profileFields.hobbies = hobbies.split(",").map((hobby) => hobby.trim()));

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // update profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      // create new profile
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   GET api/profile/
// @desc    Get all profiles
// @access  Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.json(profile);
  } catch (err) {
    console.error(error.message);
    // check for any form of ID in query string
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/profile/
// @desc    Delete user, profile and posts
// @access  Private
router.delete("/", auth, async (req, res) => {
  try {
    // remove user's posts
    // remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User has been deleted" });
  } catch (err) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
