export const selectTopic = topic => ({
  type: 'SELECT_TOPIC',
  data: topic,
});
export const backToTopicList = () => ({
  type: 'BACK_TO_TOPIC_LIST',
});
export const updateTopic = topic => ({
  type: 'UPDATE_TOPIC',
  data: topic,
});
export const beginCreateTopic = () => ({
  type: 'BEGIN_CREATE_TOPIC',
});
export const createTopic = (title, content) => ({
  type: 'CREATE_TOPIC',
  data: {
    title,
    content,
  },
});
