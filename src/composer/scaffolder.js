import {promises as fs} from 'node:fs';

export default async function ({projectRoot, projectName, description}) {
  await fs.writeFile(`${projectRoot}/composer.json`, JSON.stringify({name: `travi/${projectName}`, description}));

  return {vcsIgnore: {directories: ['vendor/']}};
}
