import {describe, expect, it} from 'vitest';
import any from '@travi/any';

import scaffoldPhing from './scaffolder.js';

describe('phing scaffolder', () => {
  it('should scaffold basic phing details', async () => {
    const projectRoot = any.string();

    const {dependencies, documentation} = await scaffoldPhing({projectRoot});

    expect(dependencies.php.development).toEqual(['phing/phing']);
    expect(documentation.contributing).toEqual({
      Verification: `\`\`\`sh
vendor/bin/phing
\`\`\``
    });
  });
});
