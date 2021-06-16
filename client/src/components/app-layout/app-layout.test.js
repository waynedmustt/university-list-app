import React from 'react';
import renderer from 'react-test-renderer'
import AppLayout from './index';

test('Render AppLayout', () => {
  const component = renderer.create(
    <AppLayout>
        <h1>Test</h1>
    </AppLayout>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});