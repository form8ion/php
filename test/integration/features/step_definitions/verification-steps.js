import {Then} from '@cucumber/cucumber';
import assert from 'node:assert';

Then('the verification command is returned to the project scaffolder', async function () {
  assert.equal(this.result.verificationCommand, './vendor/bin/phing');
});
