import React from 'react';
import renderer from 'react-test-renderer';
import TopicDetail from '../TopicDetail.js';

let topic = {
  id: 0,
  title: 'testTitle',
  content: 'testContent',
  like: 9,
  dislike: 2,
};

it('renders data correctly', () => {
  const testRenderer = renderer.create(<TopicDetail selectedTopic={topic} />);
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ id: 'topic-detail-title' }).children,
  ).toEqual(['testTitle']);
  expect(
    testInstance.findByProps({ id: 'topic-detail-content' }).children,
  ).toEqual(['testContent']);
  expect(
    testInstance.findByProps({ id: 'topic-detail-like' }).children,
  ).toEqual(['9']);
  expect(
    testInstance.findByProps({ id: 'topic-detail-dislike' }).children,
  ).toEqual(['2']);
});

it('update data correctly when like', () => {
  const updateTopicMock = jest.fn();
  const testRenderer = renderer.create(
    <TopicDetail selectedTopic={topic} updateTopic={updateTopicMock} />,
  );
  const testInstance = testRenderer.root;
  testInstance.instance.like();
  expect(updateTopicMock).toBeCalledWith({
    id: 0,
    title: 'testTitle',
    content: 'testContent',
    like: 10,
    dislike: 2,
  });
});

it('update data correctly when dislike', () => {
  const updateTopicMock = jest.fn();
  const testRenderer = renderer.create(
    <TopicDetail selectedTopic={topic} updateTopic={updateTopicMock} />,
  );
  const testInstance = testRenderer.root;
  testInstance.instance.dislike();
  expect(updateTopicMock).toBeCalledWith({
    id: 0,
    title: 'testTitle',
    content: 'testContent',
    like: 9,
    dislike: 3,
  });
});

it('calls backToTopicList callbacks when clicks back', () => {
  const backToTopicListMock = jest.fn();
  const testRenderer = renderer.create(
    <TopicDetail selectedTopic={topic} backToTopicList={backToTopicListMock} />,
  );
  const testInstance = testRenderer.root;
  testInstance.findByProps({ id: 'back-button' }).props.onClick();
  expect(backToTopicListMock).toBeCalled();
});
