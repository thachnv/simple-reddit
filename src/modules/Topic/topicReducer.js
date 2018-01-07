import Immutable from 'seamless-immutable';
import { TOPIC_MODE } from './topicConstants.js';

const INIT_STATE = Immutable({
  topicList: [
    {
      id: 1,
      title: 'test',
      content: 'test content',
      like: 0,
      dislike: 0,
    },
    {
      id: 2,
      title: 'test1',
      content: 'test content1',
      like: 0,
      dislike: 0,
    },
  ],
  selectedTopic: null,
  mode: TOPIC_MODE.VIEW_LIST,
});

const generateTopicId = topicList => {
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
      const newTopic = Immutable({
        id: generateTopicId(state.topicList),
        title,
        content,
        like: 0,
        dislike: 0,
      });
      return state.merge({
        topicList: state.topicList.concat(newTopic),
        mode: TOPIC_MODE.VIEW_LIST,
      });
    default:
      return state;
  }
};

export default topicReducer;
