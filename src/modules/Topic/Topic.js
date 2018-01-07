import React, { Component } from 'react';

import { TOPIC_MODE } from './topicConstants.js';
import TopicDetail from './TopicDetail.js';
import TopicList from './TopicList.js';
import TopicCreate from './TopicCreate';

export default class Topic extends Component {
  render() {
    switch (this.props.mode) {
      case TOPIC_MODE.VIEW_DETAIL:
        return <TopicDetail {...this.props} />;
      case TOPIC_MODE.VIEW_LIST:
        return <TopicList {...this.props} />;
      case TOPIC_MODE.CREATE:
        return <TopicCreate {...this.props} />;
    }
  }
}
