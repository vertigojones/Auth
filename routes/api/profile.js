const express = require("express");
const router = express.Router();

// @route   GET api/profile
// @desc
// @access  Public
router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;
