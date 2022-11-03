import React from 'react';
import {create, act} from 'react-test-renderer';
import Screen from './Screen';

import store from './store';
import {Provider} from 'react-redux';

const tree = create(
  <Provider store={store}>
    <Screen />
  </Provider>,
);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.runAllTimers();

it('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

it('press button', () => {
  expect(store.getState().reducer).toEqual('mounted');
  const button = tree.root.findByProps({testID: 'button'}).props;
  act(() => button.onPress());

  const text = tree.root.findByProps({testID: 'text'}).props;
  expect(text.children).toEqual('button pressed');
});

it('text updated properly', () => {
  expect(store.getState().reducer).toEqual('button pressed');
});
