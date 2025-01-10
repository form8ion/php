import deepMerge from 'deepmerge';
import {info} from '@travi/cli-messages';

import {scaffold as scaffoldComposer} from './composer/index.js';
import {scaffold as scaffoldPhing} from './phing/index.js';

export default async function ({projectRoot, projectName, description}) {
  info('Initializing PHP project');

  const [composerResult, phingResult] = await Promise.all([
    scaffoldComposer({projectRoot, projectName, description}),
    scaffoldPhing({projectRoot})
  ]);

  return deepMerge(composerResult, phingResult);
}
