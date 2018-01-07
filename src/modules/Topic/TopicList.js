import React, { Component } from 'react';

import TopicItem from './TopicItem.js';

export default class TopicList extends Component {
  render() {
    console.log(this.props.selectTopic);

    return (
      <div>
        <div>
          <button
            onClick={this.props.beginCreateTopic}
            className="btn btn-primary"
          >
            Create Topic
          </button>
        </div>
        {this.props.topicList.map((topic, index) => (
          <TopicItem
            key={index}
            onClick={() => this.props.selectTopic(topic)}
            topic={topic}
          />
        ))}
      </div>
    );
  }
}
