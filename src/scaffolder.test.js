import deepMerge from 'deepmerge';

import {expect, describe, it, vi} from 'vitest';
import any from '@travi/any';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';

import {scaffold as scaffoldComposer} from './composer/index.js';
import scaffold from './scaffolder.js';

vi.mock('deepmerge');
vi.mock('./composer/index.js');

describe('scaffolder', () => {
  it('should scaffold details of a php project', async () => {
    const projectRoot = any.string();
    const projectName = any.word();
    const description = any.sentence();
    const composerResult = any.simpleObject();
    const results = any.simpleObject();
    when(scaffoldComposer).calledWith({projectRoot, projectName, description}).thenResolve(composerResult);
    when(deepMerge).calledWith({}, composerResult).thenReturn(results);

    expect(await scaffold({projectRoot, projectName, description})).toEqual(results);
  });
});
