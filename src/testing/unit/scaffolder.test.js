import {promises as fs} from 'node:fs';

import {describe, it, vi, expect} from 'vitest';
import any from '@travi/any';

import scaffoldUnitTesting from './scaffolder.js';

vi.mock('node:fs');

describe('unit testing scaffolder', () => {
  it('should scaffold phpunit', async () => {
    const projectRoot = any.string();

    const {dependencies} = await scaffoldUnitTesting({projectRoot});

    expect(dependencies.php.development).toEqual(['phpunit/phpunit']);
    expect(fs.writeFile).toHaveBeenCalledWith(
      `${projectRoot}/phpunit.xml`,
      `<?xml version="1.0" encoding="UTF-8"?>

<phpunit>
</phpunit>
`
    );
  });
});
