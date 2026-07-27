/* eslint-disable-next-line depend/ban-dependencies */
import {execa} from 'execa';

export default async function installDependencies({projectRoot, dependencies = [], type}, {logger}) {
  if (dependencies.length) {
    logger.info(`Installing ${type} dependencies`, {level: 'secondary'});

    await execa(
      'composer',
      ['require', ...dependencies, ...'development' === type ? ['--dev'] : []],
      {cwd: projectRoot}
    );
  } else logger.warn(`No ${type} dependencies to install`);
}
