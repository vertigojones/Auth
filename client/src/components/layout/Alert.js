import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Modal, Message } from "semantic-ui-react";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Modal key={alert.id} size="small" open={true}>
      <Modal.Content>
        <Message
          negative={alert.alertType === "negative" ? true : false}
          positive={alert.alertType === "positive" ? true : false}
        >
          {alert.msg}
        </Message>
      </Modal.Content>
    </Modal>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
