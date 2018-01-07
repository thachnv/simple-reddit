import Immutable from 'seamless-immutable';

const INIT_STATE = {
  topicList: [
    {
      title: 'test',
      content: 'test content'
    },
    {
      title: 'test1',
      content: 'test content1'
    },
  ],
};

const topicReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default topicReducer;