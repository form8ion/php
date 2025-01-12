import {promises as fs} from 'node:fs';

import {describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import scaffoldPhing from './scaffolder.js';

vi.mock('node:fs');

describe('phing scaffolder', () => {
  it('should scaffold basic phing details', async () => {
    const projectRoot = any.string();
    const projectName = any.word();

    const {dependencies, documentation} = await scaffoldPhing({projectRoot, projectName});

    expect(dependencies.php.development).toEqual(['phing/phing']);
    expect(documentation.contributing).toEqual({
      Verification: `\`\`\`sh
vendor/bin/phing
\`\`\``
    });
    expect(fs.writeFile).toHaveBeenCalledWith(
      `${projectRoot}/build.xml`,
      `<?xml version="1.0" encoding="UTF-8"?>

<project name="${projectName}" default="verify">
  <target name="verify">
  </target>
</project>
`
    );
  });
});
