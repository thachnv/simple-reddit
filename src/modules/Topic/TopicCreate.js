import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TopicCreate extends Component {
  static propTypes = {
    createTopic: PropTypes.func,
    backToTopicList: PropTypes.func,
  };

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
        <div className="topic-create-title-bar">
          <span className="back-button" onClick={this.props.backToTopicList}>
            <i className="fa fa-chevron-left" />
          </span>
          <span className="topic-create-title">Create a new topic</span>
        </div>
        <div className="topic-create-form">
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
        </div>
        <button className="btn btn-primary" onClick={this.submit}>
          Create
        </button>
      </div>
    );
  }
}
