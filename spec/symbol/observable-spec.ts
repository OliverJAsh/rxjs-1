import { expect } from 'chai';
import $$symbolObservable from 'symbol-observable';

import { root } from '../../src/util/root';
import { getSymbolObservable } from '../../src/symbol/observable';

describe('observable symbol', () => {
  it('should exist in the proper form', () => {
    let $$observable = getSymbolObservable(root);
    if (root.Symbol && root.Symbol.for) {
      expect($$observable).to.equal($$symbolObservable);
    } else {
      expect($$observable).to.equal('@@observable');
    }
  });
});
