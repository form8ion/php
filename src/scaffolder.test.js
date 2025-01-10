import deepMerge from 'deepmerge';

import {expect, describe, it, vi} from 'vitest';
import any from '@travi/any';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';

import {scaffold as scaffoldComposer} from './composer/index.js';
import {scaffold as scaffoldPhing} from './phing/index.js';
import formatDocumentation from './documentation-formatter.js';
import scaffold from './scaffolder.js';

vi.mock('deepmerge');
vi.mock('./composer/index.js');
vi.mock('./phing/index.js');
vi.mock('./documentation-formatter.js');

describe('scaffolder', () => {
  it('should scaffold details of a php project', async () => {
    const projectRoot = any.string();
    const projectName = any.word();
    const description = any.sentence();
    const composerResult = any.simpleObject();
    const phingResult = any.simpleObject();
    const mergedDocumentation = any.simpleObject();
    const formattedDocumentation = any.simpleObject();
    const results = {...any.simpleObject(), documentation: mergedDocumentation};
    when(scaffoldComposer).calledWith({projectRoot, projectName, description}).thenResolve(composerResult);
    when(scaffoldPhing).calledWith({projectRoot}).thenResolve(phingResult);
    when(deepMerge).calledWith(composerResult, phingResult).thenReturn(results);
    when(formatDocumentation).calledWith(mergedDocumentation).thenReturn(formattedDocumentation);

    expect(await scaffold({projectRoot, projectName, description})).toEqual({
      ...results,
      documentation: formattedDocumentation
    });
  });
});
