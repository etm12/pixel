import * as React from 'karet';
import { mount } from 'enzyme';
import App from '../app';

describe('App', () => {
  test('mounts without crashing', () => {
    mount(<App />);
  });
});
