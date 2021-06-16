import React from 'react';
import renderer from 'react-test-renderer'
import NewsLetter from './index';

test('Render NewsLetter', () => {
  const component = renderer.create(
    <NewsLetter />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})