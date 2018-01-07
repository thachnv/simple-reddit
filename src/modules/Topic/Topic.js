import './Topic.css';
import { connect } from 'react-redux';
import TopicList from './TopicList.js';

const mapStateToProps = state => {
  return {
    topicList: state.topic.topicList,
  };
};

const mapDispatchToProps = dispatch => {};

const Topic = connect(mapStateToProps, mapDispatchToProps)(TopicList);

export default Topic;
