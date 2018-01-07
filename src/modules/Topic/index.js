import './Topic.css';
import { connect } from 'react-redux';
import Topic from './Topic.js';

import { selectTopic } from './topicActions.js';

const mapStateToProps = state => {
  return {
    topicList: state.topic.topicList,
    selectedTopic: state.topic.selectedTopic,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectTopic: topic => dispatch(selectTopic(topic)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);