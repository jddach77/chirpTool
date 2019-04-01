import React, { Component } from 'react';


class MessageType extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="text">Text</option>
        <option value="image">Image</option>
        <option value="link">Link</option>
        <option value="dropdown">Dropdown</option>
      </select>
    );
  }
}

export default MessageType;
