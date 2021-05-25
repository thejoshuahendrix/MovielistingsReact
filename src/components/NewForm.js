+
import React, { Component } from "react";
import PropTypes from "prop-types";

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = { body: new Date() };
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.state.body}</p>
      </div>
    );
  }
}

NewForm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NewForm;
