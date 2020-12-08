import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import {
  Container,
  Header,
  Divider,
  Comment,
  Message,
} from "semantic-ui-react";
import styled from "styled-components";

import PostForm from "./PostForm";
import PostItem from "./PostItem";
import Spinner from "../layout/Spinner";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <OuterContainer>
      <Container style={{ padding: "20px" }}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <HeaderContainer>
              <Header size="huge">
                <span>HD</span> SupplyBook Posts
              </Header>
            </HeaderContainer>
            <PostForm />
            <Divider />
            <HeaderContainer>
              <Header size="large">Post Feed</Header>
            </HeaderContainer>
            {posts.length > 0 ? (
              <Comment.Group>
                {posts.map((post) => {
                  return <PostItem key={post._id} post={post} />;
                })}
              </Comment.Group>
            ) : (
              <MessageContainer>
                <Message compact color="yellow">
                  There are currently no posts. Please add a post{" "}
                  <Link to="/create-post">here</Link>
                </Message>
              </MessageContainer>
            )}
          </>
        )}
      </Container>
    </OuterContainer>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);

const OuterContainer = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  border: solid 1px black;
  top: 100px;
  margin-bottom: 40px;
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

const MessageContainer = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
`;
