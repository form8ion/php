import {promises as fs} from 'node:fs';

export default async function scaffoldUnitTesting({projectRoot}) {
  await fs.writeFile(
    `${projectRoot}/phpunit.xml`,
    `<?xml version="1.0" encoding="UTF-8"?>

<phpunit>
</phpunit>
`
  );

  return {dependencies: {php: {development: ['phpunit/phpunit']}}};
}
