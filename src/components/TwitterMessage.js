import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={evt => this.setState({message: evt.target.value})} value={this.state.message}/>
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
