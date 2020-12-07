import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";
import { Form, Button } from "semantic-ui-react";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        addComment(postId, { text });
        setText("");
      }}
    >
      <Form.Field>
        <label size="huge">Leave a comment ...</label>
        <input
          name="text"
          placeholder="Add a Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </Form.Field>
      <Button type="submit" size="tiny" disabled={text === "" ? true : false}>
        Add Comment
      </Button>
    </Form>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
