import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost } from "../../actions/post";
import { Container, Header, Comment, Button, Divider } from "semantic-ui-react";
import styled from "styled-components";

import PostItem from "./PostItem";
import CommentForm from "./CommentForm";
import Spinner from "../layout/Spinner";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match]);

  return (
    <OuterContainer>
      <Container style={{ padding: "20px" }}>
        {loading || post === null ? (
          <Spinner />
        ) : (
          <>
            <HeaderContainer>
              <Header size="huge">
                <span>HD</span> SupplyBook Post Discussion
              </Header>
            </HeaderContainer>
            <Link to="/posts">
              <Button basic primary>
                Go back
              </Button>
            </Link>
            <CommentFormContainer>
              <CommentForm postId={post._id} style={{ margin: "40px 0" }} />
            </CommentFormContainer>
            <Divider />
            <Comment.Group>
              <PostItem post={post} showActions={false} />
            </Comment.Group>
          </>
        )}
      </Container>
    </OuterContainer>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);

const OuterContainer = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  border: solid 1px black;
  top: 100px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  text-shadow: 1px 1px white;
  margin-bottom: 40px;

  span {
    color: #eebb15;
    text-shadow: 1px 1px black;
  }
`;

const CommentFormContainer = styled.div`
  margin-top: 40px;
`;
