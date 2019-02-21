import * as React from 'karet';
import { mount } from 'enzyme';
import App from '../app';

describe('App', () => {
  it('mounts without crashing', () => {
    mount(<App />);
  });
});
