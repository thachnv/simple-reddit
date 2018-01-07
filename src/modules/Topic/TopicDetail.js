import React, { Component } from 'react';

export default class TopicDetail extends Component {
  like = () => {
    this.props.updateTopic({
      ...this.props.selectedTopic,
      like: this.props.selectedTopic.like + 1,
    });
  };

  dislike = () => {
    this.props.updateTopic({
      ...this.props.selectedTopic,
      dislike: this.props.selectedTopic.dislike + 1,
    });
  };

  render() {
    return (
      <div className="topic-detail-wrapper">
        <div className="topic-detail-title-bar">
          <span className="back-button" onClick={this.props.backToTopicList}>
            <i className="fa fa-chevron-left" />
          </span>
          <span className="topic-detail-title">
            {this.props.selectedTopic.title}
          </span>
        </div>
        <div className="topic-detail-content">
          {this.props.selectedTopic.content}
        </div>
        <div className="btn-toolbar">
          <button onClick={this.like} className="btn btn-default">
            <i className="fa fa-thumbs-o-up" /> {this.props.selectedTopic.like}
          </button>
          <button onClick={this.dislike} className="btn btn-default">
            <i className="fa fa-thumbs-o-down" />{' '}
            {this.props.selectedTopic.dislike}
          </button>
        </div>
      </div>
    );
  }
}
