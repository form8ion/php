import {fileExists} from '@form8ion/core';

import {describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';

import projectIsPhp from './tester.js';

vi.mock('@form8ion/core');

describe('tester', () => {
  const projectRoot = any.string();

  it('should return `false` if no `composer.json` exists', async () => {
    when(fileExists).calledWith(`${projectRoot}/composer.json`).thenResolve(false);

    expect(await projectIsPhp({projectRoot})).toBe(false);
  });

  it('should return `true` if no `composer.json` exists', async () => {
    when(fileExists).calledWith(`${projectRoot}/composer.json`).thenResolve(true);

    expect(await projectIsPhp({projectRoot})).toBe(true);
  });
});
