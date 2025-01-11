import deepMerge from 'deepmerge';
import {info} from '@travi/cli-messages';

import {scaffold as scaffoldComposer} from './composer/index.js';
import {scaffold as scaffoldPhing} from './phing/index.js';
import {scaffold as scaffoldTesting} from './testing/index.js';
import formatDocumentation from './documentation-formatter.js';

export default async function ({projectRoot, projectName, description}) {
  info('Initializing PHP project');

  const mergedResults = deepMerge.all(await Promise.all([
    scaffoldComposer({projectRoot, projectName, description}),
    scaffoldPhing({projectRoot, projectName}),
    scaffoldTesting({projectRoot})
  ]));

  return {...mergedResults, documentation: await formatDocumentation(mergedResults.documentation)};
}
