export const selectTopic = topic => ({
  type: 'SELECT_TOPIC',
  data: topic,
});
export const updateTopic = topic => ({
  type: 'UPDATE_TOPIC',
  data: topic,
});