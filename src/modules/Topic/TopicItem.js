import React from 'react';

export default ({ topic, onClick }) => (
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
