import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import { Form, Button } from "semantic-ui-react";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        addPost({ text });
        setText("");
      }}
    >
      <Form.Field>
        <label size="huge">What's on your mind today ... ?</label>
        <input
          name="text"
          placeholder="Create a new post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </Form.Field>
      <Button type="submit" size="tiny" disabled={text === "" ? true : false}>
        Create Post
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
