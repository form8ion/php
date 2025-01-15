import {execa} from 'execa';
import {info, warn} from '@travi/cli-messages';

export default async function ({projectRoot, dependencies = [], type}) {
  if (dependencies.length) {
    info(`Installing ${type} dependencies`, {level: 'secondary'});

    await execa(
      'composer',
      ['require', ...dependencies, ...'development' === type ? ['--dev'] : []],
      {cwd: projectRoot}
    );
  } else warn(`No ${type} dependencies to install`);
}
