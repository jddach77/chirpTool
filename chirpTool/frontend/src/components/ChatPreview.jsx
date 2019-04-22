import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class ChatPreview extends Component {

  constructor(props) {
    super(props);
    let headers = {"Content-Type": "application/json"};
    fetch("/api/scripts/", {headers, method: "GET"})
      .then(res => res.json())
      .then(data => {
        this.setState({ steps: data[data.length - 1].json_data });}
      ).catch(error => console.error(error))
  }

  render() {
    return(
      this.state && this.state.steps &&
      <ChatBot steps={this.state.steps} />
    )
  }
}

export default ChatPreview;
