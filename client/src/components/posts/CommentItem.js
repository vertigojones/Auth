import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/post";
import Moment from "react-moment";
import { Comment, Feed, Icon } from "semantic-ui-react";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => {
  return (
    <>
      <Comment>
        <Comment.Avatar src={avatar} as={Link} to={`/employees/${user}`} />
        <Comment.Content>
          <Comment.Author as={Link} to={`/employees/${user}`}>
            {name}
          </Comment.Author>
          <Comment.Metadata>
            <Moment format="MMMM Do YYYY, h:mm a">{date}</Moment>
          </Comment.Metadata>
          <Comment.Text>{text}</Comment.Text>
        </Comment.Content>
      </Comment>
      <Feed style={{ marginTop: "0" }}>
        <Feed.Event>
          <Feed.Content>
            <Feed.Meta style={{ marginTop: "0" }}>
              {!auth.loading && user === auth.user._id && (
                <Feed.Like onClick={(e) => deleteComment(postId, _id)}>
                  <Icon name="delete" />
                  Delete Comment
                </Feed.Like>
              )}
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
