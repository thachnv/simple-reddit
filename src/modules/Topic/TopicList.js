import React, { Component } from 'react';

import TopicItem from './TopicItem.js';

export default class TopicList extends Component {
  render() {
    return this.props.topicList.map(topic => <TopicItem topic={topic} />);
  }
}
