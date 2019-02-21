import * as Init from '../init';

describe('Core > Init', () => {
  it('should export an initial state object', () => {
    expect(Init.initial).toBeDefined();
  });
});
