import Immutable from 'seamless-immutable';

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
});

const topicReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SELECT_TOPIC':
      return state.set('selectedTopic', action.data);
    case 'UPDATE_TOPIC':
      const topicIndex = state.topicList.findIndex(
        topic => topic.id === action.data.id,
      );
      return state.merge({
        selectedTopic: action.data,
        topicList: state.topicList.set(topicIndex, action.data),
      });
    default:
      return state;
  }
};

export default topicReducer;
