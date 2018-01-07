import { combineReducers } from 'redux';

import topicReducer from '../modules/Topic/topicReducer.js';

export default combineReducers({
  topic: topicReducer
});
