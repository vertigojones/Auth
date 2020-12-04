import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Comment, Feed, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import { connect } from "react-redux";

const ProfileItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  return (
    <Comment>
      <Comment.Avatar src={avatar} />
      <Comment.Content>
        <Comment.Author as="a">{name}</Comment.Author>
        <Comment.Metadata>
          <Moment format="MMMM Do YYYY, h:mm a">{date}</Moment>
        </Comment.Metadata>
        <Comment.Text>{text}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
        <Feed style={{ marginTop: "0" }}>
          <Feed.Event>
            <Feed.Content>
              <Feed.Meta style={{ marginTop: "0" }}>
                <Feed.Like>
                  <Icon name="like" />
                  {likes.length} {likes.length === 1 ? <>Like</> : <>Likes</>}
                </Feed.Like>
                {comments.length > 0 && (
                  <Link to={`/post/${_id}`}>
                    <Feed.Like>
                      <Icon name="comments" />
                      {comments.length}{" "}
                      {comments.length === 1 ? <>Comment</> : <>Comments</>}
                    </Feed.Like>
                  </Link>
                )}
                {!auth.loading && user === auth.user._id && (
                  <Feed.Like>
                    <Icon name="delete" />
                    Delete Thread
                  </Feed.Like>
                )}
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Comment.Content>
    </Comment>
  );
};

ProfileItem.propTypes = {
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(ProfileItem);