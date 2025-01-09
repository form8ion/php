import {promises as fs} from 'node:fs';
import assert from 'node:assert';

import {When} from '@cucumber/cucumber';

When('the composer file is defined', async function () {
  assert.deepEqual(JSON.parse(await fs.readFile('composer.json', 'utf8')), {});
});
