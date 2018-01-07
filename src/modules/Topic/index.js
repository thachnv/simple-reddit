import './Topic.css';
import { connect } from 'react-redux';
import Topic from './Topic.js';
import { createSelector } from 'reselect';

import {
  selectTopic,
  updateTopic,
  backToTopicList,
  beginCreateTopic,
  createTopic,
} from './topicActions.js';

const getDisplayTopics = createSelector(
  state => state.topic.topicList,
  topicList => {
    if (!topicList) return null;
    const sortedTopicList = [].concat(topicList).sort((a, b) => {
      return b.like - a.like;
    });
    return sortedTopicList.slice(0, 20);
  },
);

const mapStateToProps = state => {
  return {
    topicList: getDisplayTopics(state),
    selectedTopic: state.topic.selectedTopic,
    mode: state.topic.mode,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectTopic: topic => dispatch(selectTopic(topic)),
    updateTopic: topic => dispatch(updateTopic(topic)),
    backToTopicList: () => dispatch(backToTopicList()),
    beginCreateTopic: () => dispatch(beginCreateTopic()),
    createTopic: (title, content) => dispatch(createTopic(title, content)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
