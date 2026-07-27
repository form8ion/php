import deepMerge from 'deepmerge';

import {scaffold as scaffoldComposer} from './composer/index.js';
import {scaffold as scaffoldPhing} from './phing/index.js';
import {scaffold as scaffoldTesting} from './testing/index.js';
import formatDocumentation from './documentation-formatter.js';

export default async function scaffold({projectRoot, projectName, description}, {logger}) {
  logger.info('Initializing PHP project');

  const mergedResults = deepMerge.all(await Promise.all([
    scaffoldComposer({projectRoot, projectName, description}),
    scaffoldPhing({projectRoot, projectName}),
    scaffoldTesting({projectRoot})
  ]));

  return {
    ...mergedResults,
    documentation: await formatDocumentation(mergedResults.documentation),
    verificationCommand: './vendor/bin/phing'
  };
}
