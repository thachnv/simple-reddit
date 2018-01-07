import React from 'react';

import { TOPIC_MODE } from './topicConstants.js';
import TopicDetail from './TopicDetail.js';
import TopicList from './TopicList.js';
import TopicCreate from './TopicCreate';

const Topic = ({ mode, ...rest }) => {
  switch (mode) {
    case TOPIC_MODE.VIEW_DETAIL:
      return <TopicDetail id="topic-detail-component" {...rest} />;
    case TOPIC_MODE.VIEW_LIST:
      return <TopicList id="topic-list-component" {...rest} />;
    case TOPIC_MODE.CREATE:
      return <TopicCreate id="topic-create-component" {...rest} />;
    default:
      return <TopicList {...rest} />;
  }
};

export default Topic;
