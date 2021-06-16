import React from 'react';
import renderer from 'react-test-renderer'
import Navbar from './index';

test('Render Navbar', () => {
  const component = renderer.create(
    <Navbar />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});