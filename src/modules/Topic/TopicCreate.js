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
      <div className="topic-create-wrapper">
        <div className="form-group">
          <label>Title:</label>
          <input
            value={this.state.title || ''}
            onChange={this.changeTitle}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea
            value={this.state.content || ''}
            onChange={this.changeContent}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" onClick={this.submit}>
          Create
        </button>
      </div>
    );
  }
}
