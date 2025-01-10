import deepMerge from 'deepmerge';
import {info} from '@travi/cli-messages';

import {scaffold as scaffoldComposer} from './composer/index.js';

export default async function ({projectRoot, projectName, description}) {
  info('Initializing PHP project');

  const composerResult = await scaffoldComposer({projectRoot, projectName, description});

  return deepMerge({}, composerResult);
}
