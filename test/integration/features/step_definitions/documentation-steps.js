import {Then} from '@cucumber/cucumber';
import assert from 'node:assert';

Then('documentation is initialized', async function () {
  assert.equal(
    this.result.documentation.contributing,
    `### Dependencies

\`\`\`sh
composer install
\`\`\`

### Verification

\`\`\`sh
vendor/bin/phing
\`\`\``
  );
});
