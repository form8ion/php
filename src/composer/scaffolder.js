import {promises as fs} from 'node:fs';

export default async function ({projectRoot}) {
  await fs.writeFile(`${projectRoot}/composer.json`, JSON.stringify({}));

  return {};
}
