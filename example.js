// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffold} from './lib/index.js';

// remark-usage-ignore-next
stubbedFs();

// #### Execute

(async () => {
  await scaffold({
    projectRoot: process.cwd(),
    projectName: 'name-of-the-project',
    description: 'A short summary of the project'
  });
})();
