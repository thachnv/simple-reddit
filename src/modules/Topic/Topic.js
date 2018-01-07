import React, { Component } from 'react';

import TopicDetail from './TopicDetail.js';
import TopicList from './TopicList.js';

export default class Topic extends Component {
  render() {
    if (this.props.selectedTopic) {
      return <TopicDetail {...this.props} />;
    } else {
      return <TopicList {...this.props} />;
    }
  }
}
