import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TopicDetail extends Component {
  static propTypes = {
    selectedTopic: PropTypes.object.isRequired,
    backToTopicList: PropTypes.func,
    updateTopic: PropTypes.func,
  };

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
          <span
            className="back-button"
            id="back-button"
            onClick={this.props.backToTopicList}
          >
            <i className="fa fa-chevron-left" />
          </span>
          <span className="topic-detail-title" id="topic-detail-title">
            {this.props.selectedTopic.title}
          </span>
        </div>
        <div className="topic-detail-content" id="topic-detail-content">
          {this.props.selectedTopic.content}
        </div>
        <div className="btn-toolbar">
          <button onClick={this.like} className="btn btn-default">
            <i className="fa fa-thumbs-o-up" />{' '}
            <span id="topic-detail-like">{this.props.selectedTopic.like}</span>
          </button>
          <button onClick={this.dislike} className="btn btn-default">
            <i className="fa fa-thumbs-o-down" />{' '}
            <span id="topic-detail-dislike">
              {this.props.selectedTopic.dislike}
            </span>
          </button>
        </div>
      </div>
    );
  }
}
