import React from 'react';
import renderer from 'react-test-renderer';
import TopicItem from '../TopicItem.js';

let topic = {
  id: 0,
  title: 'testTitle',
  content: 'testContent',
  like: 9,
  dislike: 2,
};

it('renders data correctly', () => {
  const testRenderer = renderer.create(<TopicItem topic={topic} />);
  const testInstance = testRenderer.root;
  expect(testInstance.findByProps({ id: 'topic-item-title' }).children).toEqual([
    'testTitle',
  ]);
  expect(testInstance.findByProps({ id: 'topic-item-like' }).children).toEqual(['9']);
  expect(testInstance.findByProps({ id: 'topic-item-dislike' }).children).toEqual([
    '2',
  ]);
});

it('calls onClick when user click', () => {
  const onClickFn = jest.fn();
  const testRenderer = renderer.create(<TopicItem topic={topic} onClick={onClickFn} />);
  const testInstance = testRenderer.root;
  testInstance.props.onClick();
  expect(onClickFn).toBeCalled();
});