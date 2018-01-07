import './Topic.css';
import { connect } from 'react-redux';
import Topic from './Topic.js';

import {
  selectTopic,
  updateTopic,
  backToTopicList,
  beginCreateTopic,
  createTopic,
} from './topicActions.js';

const mapStateToProps = state => {
  return {
    topicList: state.topic.topicList,
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
