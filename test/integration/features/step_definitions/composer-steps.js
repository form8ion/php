import {promises as fs} from 'node:fs';
import assert from 'node:assert';

import {Then} from '@cucumber/cucumber';

Then('the composer file is defined', async function () {
  assert.deepEqual(
    JSON.parse(await fs.readFile(`${this.projectRoot}/composer.json`, 'utf8')),
    {
      name: `travi/${this.projectName}`,
      description: this.projectDescription
    }
  );
});

Then('the vendor directory is ignored from version control', async function () {
  assert.deepEqual(this.result.vcsIgnore.directories, ['vendor/']);
});

Then('initial dependencies are defined', async function () {
  assert.deepEqual(
    this.result.dependencies.php.development,
    ['phing/phing', 'phpunit/phpunit']
  );
});
