import React from 'react';
import PropTypes from 'prop-types';

const TopicItem = ({ topic, onClick }) => (
  <div onClick={onClick} className="topic-item">
    <span className="topic-item-like">
      <i className="fa fa-thumbs-o-up" /> {topic.like}
    </span>
    <span className="topic-item-dislike">
      <i className="fa fa-thumbs-o-down" /> {topic.dislike}
    </span>
    <span className="topic-item-title">{topic.title}</span>
  </div>
);

TopicItem.propTypes = {
  topic: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default TopicItem;
