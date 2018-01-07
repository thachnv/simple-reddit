import React, { Component } from 'react';

import TopicItem from './TopicItem.js';

export default class TopicList extends Component {
  render() {
    console.log(this.props.selectTopic);

    return (
      <div className="topic-list-wrapper">
        <div>
          <p>
            <button
              onClick={this.props.beginCreateTopic}
              className="btn btn-primary"
            >
              Create Topic
            </button>
          </p>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {this.props.topicList.map((topic, index) => (
              <TopicItem
                key={index}
                onClick={() => this.props.selectTopic(topic)}
                topic={topic}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
