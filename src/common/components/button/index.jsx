import React from "react";

import PropTypes from "prop-types";

import "./button.scss";

const Button = ({ type = "primary", children, ...props }) => {
  return (
    <button className={"button button-" + type} {...props}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};
