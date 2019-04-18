import React, { Component } from 'react';


class Message extends Component {

  resetForm = () => {
    this.props.resetForm();
  }
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
  dualMessage = () => {
    this.props.handleDualMessage(this.refs.newText.value, this.refs.secondaryText.value)
  }

  renderSwitch(messageType) {
    switch (messageType) {
      case 'sector':
        return (
          <div>
            <p>
            Sector question:
            <input ref="newSector" type="text" />
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
            <input ref="newFunction" type="text" />
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
            <input ref="newSeniority" type="text" />
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
            <input ref="secondaryText" type="text" />
            Text:
            <input ref="newText" type="text" />
            </p>
            <input type="submit" value="Save" onClick={this.dualMessage} />
            <button onClick={this.resetForm}>Reset</button>
          </div>
        );
      case 'image':
        return (
          <div>
            <p>
            Image URL:
            <input ref="secondaryText" type="text" />
            Alt Text:
            <input ref="newText" type="text" />
            </p>
            <input type="submit" value="Save" onClick={this.dualMessage} />
            <button onClick={this.resetForm}>Reset</button>
          </div>
        );
      case 'choices':
        return (
          <div>
            <p>
            Choices (comma-separated)
            </p>
            <textarea
              ref="newText"
              placeholder="E.g. Apples, Bananas, Oranges"
              required />
            <input type="submit" value="Save" onClick={this.textMessage} />
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
