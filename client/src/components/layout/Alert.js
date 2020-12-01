import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Message } from "semantic-ui-react";
import styled from "styled-components";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <MessageContainer>
      <Container>
        <Message
          key={alert.id}
          negative={alert.alertType === "negative" ? true : false}
        >
          {alert.msg}
        </Message>
      </Container>
    </MessageContainer>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);

const MessageContainer = styled.div`
  position: absolute;
  top: 120px;

  @media (max-width: 768px) {
    bottom: 20px;
    top: auto;
  }
`;
