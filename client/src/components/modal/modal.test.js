import React from 'react';
import renderer from 'react-test-renderer'
import Modal from './index';

test('Render Modal', () => {
  const component = renderer.create(
    <Modal 
    renderBody={() => {}}
    renderFooter={() => {}}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.setIsOpen;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});