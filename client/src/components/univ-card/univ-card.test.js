import React from 'react';
import renderer from 'react-test-renderer'
import UnivCard from './index';

test('Render UnivCard', () => {
  const component = renderer.create(
    <UnivCard />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})