import React from 'react';
import renderer from 'react-test-renderer';
import TopicCreate from '../TopicCreate.js';

it('update title state correctly', () => {
  const testRenderer = renderer.create(<TopicCreate />);
  const testInstance = testRenderer.root;
  testInstance
    .findByProps({ id: 'topic-create-title' })
    .props.onChange({ target: { value: 'test title' } });
  expect(testInstance.instance.state.title).toEqual('test title');
});

it('update content state correctly', () => {
  const testRenderer = renderer.create(<TopicCreate />);
  const testInstance = testRenderer.root;
  testInstance
    .findByProps({ id: 'topic-create-content' })
    .props.onChange({ target: { value: 'test content' } });
  expect(testInstance.instance.state.content).toEqual('test content');
});

it('call createTopic with correct data when clicks create', () => {
  const createTopicMock = jest.fn();
  const testRenderer = renderer.create(
    <TopicCreate createTopic={createTopicMock} />,
  );
  const testInstance = testRenderer.root;

  testInstance
    .findByProps({ id: 'topic-create-title' })
    .props.onChange({ target: { value: 'test title' } });

  testInstance
    .findByProps({ id: 'topic-create-content' })
    .props.onChange({ target: { value: 'test content' } });

  testInstance
    .findByProps({ id: 'topic-create-button-submit' })
    .props.onClick();

  expect(createTopicMock).toBeCalledWith('test title', 'test content');
});

it('calls backToTopicList callbacks when clicks back', () => {
  const backToTopicListMock = jest.fn();
  const testRenderer = renderer.create(
    <TopicCreate backToTopicList={backToTopicListMock} />,
  );
  const testInstance = testRenderer.root;
  testInstance.findByProps({ id: 'back-button' }).props.onClick();
  expect(backToTopicListMock).toBeCalled();
});
