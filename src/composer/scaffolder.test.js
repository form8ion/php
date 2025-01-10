import {promises as fs} from 'node:fs';

import {describe, it, expect, vi} from 'vitest';
import any from '@travi/any';

import scaffoldComposer from './scaffolder.js';

vi.mock('node:fs');

describe('composer scaffolder', () => {
  it('should scaffold composer details', async () => {
    const projectRoot = any.string();
    const projectName = any.word();
    const description = any.sentence();

    expect(await scaffoldComposer({projectRoot, projectName, description})).toEqual({
      vcsIgnore: {directories: ['vendor/']}
    });
    expect(fs.writeFile).toHaveBeenCalledWith(
      `${projectRoot}/composer.json`,
      JSON.stringify({name: `travi/${projectName}`, description})
    );
  });
});
