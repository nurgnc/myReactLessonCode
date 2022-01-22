import React from "react";
import { Alert } from "react-bootstrap";
import PropTypes from 'prop-types';

function ErrorComponent({ message }) {
  return <Alert variant="danger">{message}</Alert>
}

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorComponent;