import React from 'react';
import PropTypes from 'prop-types';

import TopicItem from './TopicItem.js';

const TopicList = ({ topicList, beginCreateTopic, selectTopic }) => (
  <div className="topic-list-wrapper">
    <div>
      <p>
        <button onClick={beginCreateTopic} className="btn btn-primary">
          Create Topic
        </button>
      </p>
    </div>
    <div className="row">
      <div className="col-xs-12">
        {topicList ? (
          topicList.map((topic, index) => (
            <TopicItem
              key={index}
              onClick={() => selectTopic(topic)}
              topic={topic}
            />
          ))
        ) : (
          <span>Please create a topic</span>
        )}
      </div>
    </div>
  </div>
);

TopicList.propTypes = {
  topicList: PropTypes.array,
  beginCreateTopic: PropTypes.func,
  selectTopic: PropTypes.func,
};

export default TopicList;
