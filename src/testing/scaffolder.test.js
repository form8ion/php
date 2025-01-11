import {describe, it, vi, expect} from 'vitest';
import any from '@travi/any';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';

import {scaffold as scaffoldUnitTesting} from './unit/index.js';
import scaffoldTesting from './scaffolder.js';

vi.mock('./unit/index.js');

describe('testing scaffolder', () => {
  it('should enable testing', async () => {
    const projectRoot = any.string();
    const unitResult = any.simpleObject();
    when(scaffoldUnitTesting).calledWith({projectRoot}).thenResolve(unitResult);

    expect(await scaffoldTesting({projectRoot})).toEqual(unitResult);
  });
});
