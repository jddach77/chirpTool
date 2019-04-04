import React, { Component } from 'react';


class Message extends Component {

  textMessage = () => {
    this.props.handleTextMessage(this.refs.newText.value)
  }

  renderSwitch(messageType) {
    switch (messageType) {
      case 'sector':
        return (
          <div>
            <p>
            Sector question:
            <input type="text" id={messageType} />
            </p>
            <input type="submit" value="Save" />
            <button onClick={this.resetForm}>Reset</button>
          </div>
        );
      case 'function':
        return (
          <div>
            <p>
            Function question:
            <input type="text" id={messageType} />
            </p>
            <input type="submit" value="Save" />
            <button onClick={this.resetForm}>Reset</button>
          </div>
        );
      case 'seniority':
        return (
          <div>
            <p>
            seniority question:
            <input type="text" id={messageType} />
            </p>
            <input type="submit" value="Save" />
            <button onClick={this.resetForm}>Reset</button>
          </div>
        );
      case 'text':
        return (
          <div>
            <p>
            <textarea
              ref="newText"
              placeholder="Enter text here..."
              required />
            </p>
            <input type="submit" value="Save" onClick={this.textMessage}/>
            <button onClick={this.resetForm}>Reset</button>
          </div>
        );
      case 'link':
        return (
          <div>
            <p>
            URL:
            <input type="text" id={messageType} />
            Text:
            <input onChange={(e) => this.setState({text: e.target.value})} type="text" id="text" />
            </p>
            <input type="submit" value="Save" />
            <button onClick={this.resetForm}>Reset</button>
          </div>
        );
      case 'dropdown':
        return (
          <div>
            <p>
            URL:
            <input type="text" id={messageType} />
            Text:
            <input type="text" id="text" />
            </p>
            <input type="submit" value="Save" />
            <button onClick={this.resetForm}>Reset</button>
          </div>
        );
      default:
        return null;
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
