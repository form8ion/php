import {promises as fs} from 'node:fs';
import assert from 'node:assert';

import {When} from '@cucumber/cucumber';

When('the composer file is defined', async function () {
  assert.deepEqual(
    JSON.parse(await fs.readFile(`${this.projectRoot}/composer.json`, 'utf8')),
    {
      name: `travi/${this.projectName}`,
      description: this.projectDescription
    }
  );
});
