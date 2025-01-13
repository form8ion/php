// #### Import
// remark-usage-ignore-next 3
import {resolve} from 'path';
import stubbedFs from 'mock-fs';
import * as td from 'testdouble';

// remark-usage-ignore-next
stubbedFs({node_modules: stubbedFs.load(resolve('node_modules'))});

// #### Execute

// remark-usage-ignore-next 2
(async () => {
  await td.replaceEsm('execa');
  const {scaffold, test, lift} = await import('./lib/index.js');

  const projectRoot = process.cwd();

  await scaffold({
    projectRoot,
    projectName: 'name-of-the-project',
    description: 'A short summary of the project'
  });

  if (await test({projectRoot})) {
    await lift({
      projectRoot,
      results: {
        dependencies: {
          php: {
            production: ['smarty/smarty'],
            development: ['phpunit/phpunit']
          }
        }
      }
    });
  }
// remark-usage-ignore-next
})();
