import React, { Component } from 'react';


class MessageType extends Component {

  render() {
    return (
      <select
      value={this.props.messageType}
      onChange={(event) => this.props.onTypeSwitch(event.target.value)
      }>
      {this.props.messageTypes.map((messageType, index) =>
        <option key={index} value={messageType}>{messageType}</option>
      )}
      </select>
    );
  }
}

export default MessageType;
