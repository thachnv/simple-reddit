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
      <div>
        <div onClick={() => this.props.selectTopic(null)}>back</div>
        <div>{this.props.selectedTopic.title}</div>
        <div>{this.props.selectedTopic.content}</div>
        <div onClick={this.like}>Like ({this.props.selectedTopic.like})</div>
        <div onClick={this.dislike}>
          Dislike ({this.props.selectedTopic.dislike})
        </div>
      </div>
    );
  }
}
