import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'I love Kata',
    trigger: '2'
  },
  {
    id: '2',
    message: 'Bye!',
    end: true,
  },
];

class ChatPreview extends Component {
  render() {
    return(
      <ChatBot steps={steps} />
    )
  }
}

export default ChatPreview;
