import {promises as fs} from 'node:fs';

import {describe, it, expect, vi} from 'vitest';
import any from '@travi/any';

import scaffoldComposer from './scaffolder.js';

vi.mock('node:fs');

describe('composer scaffolder', () => {
  it('should scaffold composer details', async () => {
    const projectRoot = any.string();

    expect(await scaffoldComposer({projectRoot})).toEqual({});
    expect(fs.writeFile).toHaveBeenCalledWith(`${projectRoot}/composer.json`, JSON.stringify({}));
  });
});
