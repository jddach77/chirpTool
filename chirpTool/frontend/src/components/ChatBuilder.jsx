import React, { Component } from 'react';
import {connect} from 'react-redux';
import MessageType from './MessageType'

import {messages} from "../actions";

const messageTypes = [
  'text',
  'image',
  'link',
  'dropdown',
]

class ChatBuilder extends Component {

  constructor(props) {
    super(props);

    this.handleTypeSwitch = this.handleTypeSwitch.bind(this);
  }

  state = {
    messageType: '',
    text: '',
    updateMessageId: null,
  }

  resetForm = () => {
    this.setState({
      messageType: '',
      text: '',
      updateMessageId: null
    });
  }

  selectForEdit = (id) => {
    let message = this.props.messages[id];
    this.setState({text: message.text, updateMessageId: id});
  }

  submitMessage = (e) => {
    e.preventDefault();
    if (this.state.updateMessageId === null) {
      this.props.addMessage(this.state.text, this.state.messageType).then(this.resetForm);
    } else {
      this.props.updateMessage(this.state.updateMessageId, this.state.text).then(this.resetForm);
    }
  }

  handleTypeSwitch = (type) => {
    this.setState({messageType: type});
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    return (
      <div>
      <h2>Welcome to the ChatBuilder!</h2>
      <hr />
      <h3>Add new message</h3>
        <form onSubmit={this.submitMessage}>
        <MessageType messageTypes={messageTypes} onTypeSwitch={this.handleTypeSwitch}/>
          <textarea
            value={this.state.text}
            placeholder="Enter text here..."
            onChange={(e) => this.setState({text: e.target.value})}
            required />
          <input type="submit" value="Save" />
          <button onClick={this.resetForm}>Reset</button>
        </form>
      <h3>Messages</h3>
          <table>
            <tbody>
              {this.props.messages.map((message, id) => (
                <tr key={`message_${id}`}>
                  <td>{message.text}</td>
                  <td><button onClick={() => this.selectForEdit(id)}>edit</button></td>
                  <td><button onClick={() => this.props.deleteMessage(id)}>delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMessage: (messageType, text) => {
      return dispatch(messages.addMessage(messageType, text));
    },
    updateMessage: (id, text) => {
      return dispatch(messages.updateMessage(id, text));
    },
    deleteMessage: (id) => {
      dispatch(messages.deleteMessage(id));
    },
    fetchMessages: () => {
      dispatch(messages.fetchMessages());
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatBuilder);
