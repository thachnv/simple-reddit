import React from 'react';
import renderer from 'react-test-renderer';
import Topic from '../Topic.js';
import { TOPIC_MODE } from '../topicConstants.js';

it('renders topic list', () => {
  const testRenderer = renderer.create(<Topic mode={TOPIC_MODE.VIEW_LIST} />);
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ id: 'topic-list-component' }).children.length,
  ).toBe(1);
});

it('renders topic detail', () => {
  const testRenderer = renderer.create(
    <Topic mode={TOPIC_MODE.VIEW_DETAIL} selectedTopic={{}} />,
  );
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ id: 'topic-detail-component' }).children.length,
  ).toBe(1);
});

it('renders topic create', () => {
  const testRenderer = renderer.create(<Topic mode={TOPIC_MODE.CREATE} />);
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ id: 'topic-create-component' }).children.length,
  ).toBe(1);
});
