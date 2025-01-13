import {install as installDependencies} from './composer/index.js';

async function manageDependencies(dependencies, projectRoot) {
  if (dependencies?.php) {
    const {production, development} = dependencies.php;

    await installDependencies({projectRoot, dependencies: production, type: 'production'});
    await installDependencies({projectRoot, dependencies: development, type: 'development'});
  }
}

export default async function ({projectRoot, results: {dependencies}}) {
  await manageDependencies(dependencies, projectRoot);

  return {};
}
