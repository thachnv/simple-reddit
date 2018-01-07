import Immutable from 'seamless-immutable';

const INIT_STATE = Immutable({
  topicList: [
    {
      title: 'test',
      content: 'test content',
    },
    {
      title: 'test1',
      content: 'test content1',
    },
  ],
  selectedTopic: null,
});

const topicReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SELECT_TOPIC':
      console.log('hahah')
      console.log(action.data);
      return state.set('selectedTopic', action.data);
    default:
      return state;
  }
};

export default topicReducer;
