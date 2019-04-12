import React, { Component } from 'react';


class Message extends Component {

  textMessage = () => {
    this.props.handleTextMessage(this.refs.newText.value)
  }

  sectorMessage = () => {
    this.props.handleTextMessage(this.refs.newSector.value)
  }

  functionMessage = () => {
    this.props.handleTextMessage(this.refs.newFunction.value)
  }

  seniorityMessage = () => {
    this.props.handleTextMessage(this.refs.newSeniority.value)
  }

  urlMessage = () => {
    this.props.handleHyperlink(this.refs.newHyperlink.value, this.refs.newUrl.value)
  }

  renderSwitch(messageType) {
    switch (messageType) {
      case 'sector':
        return (
          <div>
            <p>
            Sector question:
            <input ref="newSector" type="text" id={messageType} />
            </p>
            <input type="submit" value="Save" onClick={this.sectorMessage} />
            <button onClick={this.resetForm}>Reset</button>
          </div>
        );
      case 'function':
        return (
          <div>
            <p>
            Function question:
            <input ref="newFunction" type="text" id={messageType} />
            </p>
            <input type="submit" value="Save" onClick={this.functionMessage} />
            <button onClick={this.resetForm}>Reset</button>
          </div>
        );
      case 'seniority':
        return (
          <div>
            <p>
            seniority question:
            <input ref="newSeniority" type="text" id={messageType} />
            </p>
            <input type="submit" value="Save" onClick={this.seniorityMessage} />
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
            <input type="submit" value="Save" onClick={this.textMessage} />
            <button onClick={this.resetForm}>Reset</button>
          </div>
        );
      case 'link':
        return (
          <div>
            <p>
            URL:
            <input ref="newUrl" type="text" id={messageType} />
            Text:
            <input ref="newHyperlink" type="text" />
            </p>
            <input type="submit" value="Save" onClick={this.urlMessage} />
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
