import React, { Component } from 'react';


class Message extends Component {

  renderSwitch(messageType) {
    switch (messageType) {
      case 'text':
        return (
          <div>
            <textarea
              value={this.props.text}
              placeholder="Enter text here..."
              onChange={(e) => this.setState({text: e.target.value})}
              required />
            <input type="submit" value="Save" />
            <button onClick={this.resetForm}>Reset</button>
          </div>
        );
      default:
    }
  }

  render() {
    let messageType = this.props.messageType;
    return (
      <div>
      {this.renderSwitch(messageType)}
      </div>
    );
  }
}

export default Message;
