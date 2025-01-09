import {info} from '@travi/cli-messages';

import {scaffold as scaffoldComposer} from './composer/index.js';

export default async function ({projectRoot}) {
  info('Initializing PHP project');

  await scaffoldComposer({projectRoot});

  return {};
}
