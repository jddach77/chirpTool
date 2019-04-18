import React, { Component } from 'react';
import {connect} from 'react-redux';
import Message from './Message'

import {messages} from "../actions";

const messageTypes = [
  'sector',
  'function',
  'seniority',
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
    url: '',
    updateMessageId: null,
  }

  resetForm = () => {
    this.setState({
      messageType: '',
      text: '',
      url: '',
      updateMessageId: null
    });
  }

  selectForEdit = (id) => {
    console.log(id);
    let message = this.props.messages[id];
    this.setState({text: message.text, updateMessageId: id});
  }

  submitMessage = (e) => {
    e.preventDefault();
    if (this.state.messageType === 'link' || 'image') {
      this.props.addDualMessage(this.state.text, this.state.secondaryText, this.state.messageType)
    }
    else if (this.state.updateMessageId === null) {
      this.props.addMessage(this.state.text, this.state.messageType).then(this.resetForm);
    } else {
      this.props.updateMessage(this.state.updateMessageId, this.state.text).then(this.resetForm);
    }
  }

  handleTypeSwitch = (type) => {
    this.setState({messageType: type});
    console.log(this.state);
  }

  handleTextMessage = (val) => {
    this.setState({text: val})
  }

  handleDualMessage = (text, secondaryText) => {
    this.setState({
      text: text,
      secondaryText: secondaryText,
    })
    console.log(this.state);
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
              {this.props.messages.map((message, id) => (
                <tr key={`message_${id}`}>
                  <td>{message.id}</td>
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
    addDualMessage: (messageType, text, secondaryText) => {
      return dispatch(messages.addDualMessage(messageType, text, secondaryText))
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
