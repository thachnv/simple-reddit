import React, { Component } from 'react';

export default class TopicCreate extends Component {
  state = {
    title: null,
    content: null,
  };

  changeTitle = e => {
    this.setState({
      title: e.target.value,
    });
  };

  changeContent = e => {
    this.setState({
      content: e.target.value,
    });
  };

  submit = () => {
    this.props.createTopic(this.state.title, this.state.content);
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Title:</label>
          <input
            value={this.state.title}
            onChange={this.changeTitle}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <input
            value={this.state.content}
            onChange={this.changeContent}
            className="form-control"
          />
        </div>
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}
