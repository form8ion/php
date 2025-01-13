import {promises as fs} from 'node:fs';

import assert from 'node:assert';
import * as td from 'testdouble';
import {Given, Then} from '@cucumber/cucumber';
import any from '@travi/any';

Given('the project is an existing php project', async function () {
  await fs.writeFile(
    `${this.projectRoot}/composer.json`,
    JSON.stringify(any.simpleObject())
  );
});

Given('no dependencies are defined in the results', async function () {
  this.dependencyResults = null;
});

Given('no php dependencies are defined in the results', async function () {
  this.dependencyResults = any.simpleObject();
});

Given('php dependencies are defined in the results', async function () {
  this.dependencyResults = {
    ...any.simpleObject(),
    php: {development: any.listOf(any.word), production: any.listOf(any.word)}
  };
});

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

Then('no dependencies are installed with composer', async function () {
  td.verify(this.execa('composer', td.matchers.contains('require')), {times: 0, ignoreExtraArgs: true});
});

Then('the dependencies are installed with composer', async function () {
  td.verify(this.execa('composer', ['require', ...this.dependencyResults.php.production], {cwd: this.projectRoot}));
  td.verify(
    this.execa('composer', ['require', ...this.dependencyResults.php.development, '--dev'], {cwd: this.projectRoot})
  );
});
