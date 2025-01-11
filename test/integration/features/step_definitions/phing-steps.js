import {promises as fs} from 'node:fs';

import {Then} from '@cucumber/cucumber';
import assert from 'node:assert';

Then('the build file is defined', async function () {
  const buildFile = await fs.readFile(`${this.projectRoot}/build.xml`, 'utf-8');

  assert.equal(
    buildFile,
    `<?xml version="1.0" encoding="UTF-8"?>

<project name="${this.projectName}">
</project>
`
  );
});
