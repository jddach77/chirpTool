import React, { Component } from 'react';

const messageTypes = [
  'text',
  'image',
  'link',
  'dropdown',
]

class MessageType extends Component {
  constructor(props) {
    super(props);

    this.onTypeSwitch = this.props.onTypeSwitch.bind(this);
  }

  render() {
    return (
      <select
      value={this.props.messageType}
      onChange={this.onTypeSwitch(this.props.messageType)
      }>
      {messageTypes.map((messageType, index) =>
        <option key={index} value={messageType}>{messageType}</option>
      )}
      </select>
    );
  }
}

export default MessageType;
