import {execa} from 'execa';
import {info} from '@travi/cli-messages';

export default async function ({projectRoot, dependencies, type}) {
  info(`Installing ${type} dependencies`, {level: 'secondary'});

  await execa('composer', ['require', ...dependencies, ...'development' === type ? ['--dev'] : []], {cwd: projectRoot});
}
