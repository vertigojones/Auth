import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Comment, Feed, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  return (
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
        {showActions && (
          <>
            <Comment.Actions>
              <Comment.Action as={Link} to={`/posts/${_id}`}>
                Reply
              </Comment.Action>
            </Comment.Actions>
            <Feed style={{ marginTop: "0" }}>
              <Feed.Event>
                <Feed.Content
                  style={{
                    height: "36px",
                    display: "flex",
                    alignItems: "flex-end",
                    marginBottom: "12px"
                  }}
                >
                  <Feed.Meta style={{ marginTop: "0" }}>
                    <Icon
                      name="thumbs up outline"
                      size="large"
                      onClick={(e) => addLike(_id)}
                      style={{ marginRight: "-5px" }}
                    />
                    <Icon
                      name="thumbs down outline"
                      size="large"
                      onClick={(e) => removeLike(_id)}
                      style={{ marginRight: "20px" }}
                    />
                    <Feed.Like>
                      <Icon name="like" />
                      {likes.length}{" "}
                      {likes.length === 1 ? <>Like</> : <>Likes</>}
                    </Feed.Like>
                    {comments.length > 0 && (
                      <Link to={`/posts/${_id}`}>
                        <Icon name="comments" />
                        {comments.length}{" "}
                        {comments.length === 1 ? <>Comment</> : <>Comments</>}
                      </Link>
                    )}
                    {!auth.loading && user === auth.user._id && (
                      <Feed.Like onClick={(e) => deletePost(_id)}>
                        <Icon name="delete" />
                        Delete Thread
                      </Feed.Like>
                    )}
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </>
        )}
      </Comment.Content>
    </Comment>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
