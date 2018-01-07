import Immutable from 'seamless-immutable';
import { TOPIC_MODE } from './topicConstants.js';

const INIT_STATE = Immutable({
  topicList: null,
  selectedTopic: null,
  mode: TOPIC_MODE.VIEW_LIST,
});

const generateTopicId = topicList => {
  if (!topicList) return 0;
  let maxId = 0;
  topicList.forEach(topic => {
    if (maxId < topic.id) {
      maxId = topic.id;
    }
  });
  return maxId + 1;
};

const topicReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SELECT_TOPIC':
      return state.merge({
        selectedTopic: action.data,
        mode: TOPIC_MODE.VIEW_DETAIL,
      });
    case 'BACK_TO_TOPIC_LIST':
      return state.set('mode', TOPIC_MODE.VIEW_LIST);
    case 'UPDATE_TOPIC':
      const topicIndex = state.topicList.findIndex(
        topic => topic.id === action.data.id,
      );
      return state.merge({
        selectedTopic: action.data,
        topicList: state.topicList.set(topicIndex, action.data),
      });
    case 'BEGIN_CREATE_TOPIC':
      return state.set('mode', TOPIC_MODE.CREATE);
    case 'CREATE_TOPIC':
      const { title, content } = action.data;
      const newTopic = {
        id: generateTopicId(state.topicList),
        title,
        content,
        like: 0,
        dislike: 0,
      };
      return state.merge({
        topicList: state.topicList
          ? state.topicList.concat(newTopic)
          : Immutable([newTopic]),
        mode: TOPIC_MODE.VIEW_LIST,
      });
    default:
      return state;
  }
};

export default topicReducer;
