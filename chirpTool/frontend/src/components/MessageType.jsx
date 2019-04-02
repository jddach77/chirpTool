import React, { Component } from 'react';

const messageTypes = [
  'text',
  'image',
  'link',
  'dropdown',
]

class MessageType extends Component {

  render() {
    return (
      <select
      value={this.props.messageType}
      onChange={() => this.props.onTypeSwitch(this.props.messageType)
      }>
      {messageTypes.map((messageType, index) =>
        <option key={index} value={messageType}>{messageType}</option>
      )}
      </select>
    );
  }
}

export default MessageType;
