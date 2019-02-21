import { Property } from 'kefir';
import { state, initial } from '../store';

describe('State', () => {
  it('is an observable property', () => {
    expect(state).toBeInstanceOf(Property);
  });

  it('has initial state set', done => {
    state
      .take(1)
      .onValue(v => {
        expect(v).toEqual(initial);
        done();
      });
  });
});
