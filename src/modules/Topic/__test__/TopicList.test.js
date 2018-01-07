import React from 'react';
import renderer from 'react-test-renderer';
import TopicList from '../TopicList.js';

const topicList = [
  {
    id: 0,
    title: 'testTitle',
    content: 'testContent',
    like: 9,
    dislike: 2,
  },
  {
    id: 1,
    title: 'testTitle1',
    content: 'testContent1',
    like: 7,
    dislike: 1,
  },
  {
    id: 2,
    title: 'testTitle2',
    content: 'testContent2',
    like: 6,
    dislike: 6,
  },
];

it('renders all topic items', () => {
  const testRenderer = renderer.create(<TopicList topicList={topicList} />);
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ id: 'topic-list-items' }).children.length,
  ).toBe(3);
});

it('show no topics messages', () => {
  const topicList = null;
  const testRenderer = renderer.create(<TopicList topicList={topicList} />);
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ id: 'no-topic-message' }).children.length,
  ).toBe(1);
});

it('call selectTopic with correct data', () => {
  const selectTopicMock = jest.fn();
  const testRenderer = renderer.create(
    <TopicList topicList={topicList} selectTopic={selectTopicMock} />,
  );
  const testInstance = testRenderer.root;
  testInstance
    .findByProps({ id: 'topic-list-items' })
    .children[1].props.onClick();
  expect(selectTopicMock).toBeCalledWith(topicList[1]);
});

it('call beginCreateTopic', () => {
  const beginCreateTopicMock = jest.fn();
  const testRenderer = renderer.create(
    <TopicList topicList={topicList} beginCreateTopic={beginCreateTopicMock} />,
  );
  const testInstance = testRenderer.root;
  testInstance.findByProps({ id: 'begin-create-topic-button' }).props.onClick();
  expect(beginCreateTopicMock).toBeCalled();
});
