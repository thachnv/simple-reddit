import './Topic.css';
import { connect } from 'react-redux';
import Topic from './Topic.js';

import { selectTopic, updateTopic } from './topicActions.js';

const mapStateToProps = state => {
  return {
    topicList: state.topic.topicList,
    selectedTopic: state.topic.selectedTopic,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectTopic: topic => dispatch(selectTopic(topic)),
    updateTopic: topic => dispatch(updateTopic(topic)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
