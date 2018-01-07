import React, { Component } from 'react';

export default class TopicDetail extends Component {
  render() {
    return (
      <div>
        <div onClick={() => this.props.selectTopic(null)}>back</div>
        <div>{this.props.selectedTopic.title}</div>
        <div>{this.props.selectedTopic.content}</div>
      </div>
    );
  }
}
