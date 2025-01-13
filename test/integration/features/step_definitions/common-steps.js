import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {After, Before, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';
import any from '@travi/any';
import * as td from 'testdouble';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

let scaffold, lift, test;

Before(async function () {
  this.execa = (await td.replaceEsm('execa')).execa;

  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  ({scaffold, lift, test} = await import('@form8ion/php'));

  this.projectRoot = process.cwd();
  this.projectName = any.word();
  this.projectDescription = any.sentence();

  stubbedFs({
    node_modules: stubbedNodeModules
  });
});

After(function () {
  stubbedFs.restore();
  td.reset();
});

When('the project is scaffolded', async function () {
  this.result = await scaffold({
    projectRoot: this.projectRoot,
    projectName: this.projectName,
    description: this.projectDescription
  });
});

When('the project is lifted', async function () {
  if (await test({projectRoot: this.projectRoot})) {
    await lift({
      projectRoot: this.projectRoot,
      results: {
        dependencies: this.dependencyResults
      }
    });
  }
});
