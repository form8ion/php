import {Then} from '@cucumber/cucumber';
import {promises as fs} from 'fs';
import assert from 'node:assert';

Then('unit testing is configured', async function () {
  const phpunitConfig = await fs.readFile(`${this.projectRoot}/phpunit.xml`, 'utf-8');

  assert.equal(
    phpunitConfig,
    `<?xml version="1.0" encoding="UTF-8"?>

<phpunit>
</phpunit>
`
  );
});
