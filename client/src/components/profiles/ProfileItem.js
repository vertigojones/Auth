import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";

const ProfileItem = ({
  profile: {
    user: { _id, name, email, avatar },
    department,
  },
}) => {
  return (
    <Item as={Link} to={`/employees/${_id}`} style={{ marginTop: "40px" }}>
      <Item.Image size="tiny" src={avatar} />
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Description>{department}</Item.Description>
        <Item.Meta>{email}</Item.Meta>
      </Item.Content>
    </Item>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
