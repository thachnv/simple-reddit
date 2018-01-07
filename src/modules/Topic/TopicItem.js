import React from 'react';
import PropTypes from 'prop-types';

const TopicItem = ({ topic, onClick }) => (
  <div onClick={onClick} className="topic-item">
    <span className="topic-item-like">
      <i className="fa fa-thumbs-o-up" />{' '}
      <span id="topic-item-like">{topic.like}</span>
    </span>
    <span className="topic-item-dislike">
      <i className="fa fa-thumbs-o-down" />{' '}
      <span id="topic-item-dislike">{topic.dislike}</span>
    </span>
    <span className="topic-item-title" id="topic-item-title">
      {topic.title}
    </span>
  </div>
);

TopicItem.propTypes = {
  topic: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default TopicItem;
