import React, { Component } from 'react';
import {connect} from 'react-redux';
import Message from './Message'

import {messages} from "../actions";

const messageTypes = [
  'text',
  'sector',
  'function',
  'seniority',
  'image',
  'link',
  'choices',
]

class ChatBuilder extends Component {

  constructor(props) {
    super(props);
    this.handleTypeSwitch = this.handleTypeSwitch.bind(this);
  }

  state = {
    messageType: 'text',
    message: '',
    secondaryText: '',
    updateMessageId: null,
  }

  resetForm = () => {
    this.setState({
      messageType: '',
      message: '',
      secondaryText: '',
      updateMessageId: null
    });
  }

  selectForEdit = (id) => {
    let message = this.props.messages[id];
    this.handleTypeSwitch(message.messageType);
    if (message.messageType === 'link' || 'image') {
      this.setState({message: message.text, secondaryText: message.secondaryText, messageType: message.messageType, updateMessageId: id})
    }
    this.setState({message: message.text, messageType: message.messageType, updateMessageId: id});
  }

  submitMessage = (e) => {
    e.preventDefault();
    if (this.state.updateMessageId === null) {
      if (this.state.messageType === 'link' || 'image') {
        this.props.addDualMessage(this.state.message, this.state.secondaryText, this.state.messageType).then(this.resetForm);
      } else {
        this.props.addMessage(this.state.message, this.state.messageType).then(this.resetForm);
      }
    } else if (this.state.messageType === 'link' || 'image') {
        this.props.updateDualMessage(this.state.updateMessageId, this.state.message, this.state.secondaryText).then(this.resetForm);
    } else {
        this.props.updateMessage(this.state.updateMessageId, this.state.message).then(this.resetForm);
    }
  }

  handleTypeSwitch = (type) => {
    this.setState({messageType: type});
  }

  handleTextMessage = (val) => {
    this.setState({message: val})
  }

  handleDualMessage = (text, secondaryText) => {
    this.setState({
      message: text,
      secondaryText: secondaryText,
    })
    console.log(this.state);
  }

  generateScript = (messages) => {
    console.log(messages);
    this.props.generateScript(messages)
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
          <select
          value={this.props.messageType}
          onChange={(e) => this.handleTypeSwitch(e.target.value)
          }>
          {messageTypes.map((messageType, index) =>
            <option key={index} value={messageType}>{messageType}</option>
          )}
          </select>
        <Message
          messageType={this.state.messageType}
          handleTextMessage={this.handleTextMessage}
          handleDualMessage={this.handleDualMessage}
          resetForm={this.resetForm}
        />
        </form>
      <h3>Messages</h3>
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <th>Message Type</th>
                <th>Message</th>
                <th>Secondary Text</th>
              </tr>
              {this.props.messages.map((message, id) => (
                <tr key={`message_${id}`} >
                  <td>{message.id}</td>
                  <td>{message.messageType}</td>
                  <td>{message.message}</td>
                  <td>{message.secondaryText}</td>
                  <td><button onClick={() => this.selectForEdit(id)}>edit</button></td>
                  <td><button onClick={() => this.props.deleteMessage(id)}>delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => this.generateScript(this.props.messages)}>Generate Script</button>
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
    addMessage: (messageType, message) => {
      return dispatch(messages.addMessage(messageType, message));
    },
    addDualMessage: (messageType, message, secondaryText) => {
      return dispatch(messages.addDualMessage(messageType, message, secondaryText))
    },
    updateMessage: (id, message) => {
      return dispatch(messages.updateMessage(id, message));
    },
    updateDualMessage: (id, message, secondaryText) => {
      return dispatch(messages.updateMessage(id, message, secondaryText));
    },
    deleteMessage: (id) => {
      dispatch(messages.deleteMessage(id));
    },
    fetchMessages: () => {
      dispatch(messages.fetchMessages());
    },
    generateScript: (script) => {
      return dispatch(messages.generateScript(script))
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatBuilder);
