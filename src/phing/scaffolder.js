import {promises as fs} from 'node:fs';

export default async function ({projectRoot, projectName}) {
  await fs.writeFile(
    `${projectRoot}/build.xml`,
    `<?xml version="1.0" encoding="UTF-8"?>

<project name="${projectName}" default="verify">
  <target name="verify">
  </target>
</project>
`
  );

  return {
    dependencies: {php: {development: ['phing/phing']}},
    documentation: {
      contributing: {
        Verification: `\`\`\`sh
vendor/bin/phing
\`\`\``
      }
    }
  };
}
