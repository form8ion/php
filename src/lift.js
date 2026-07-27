import {install as installDependencies} from './composer/index.js';

async function manageDependencies({dependencies, projectRoot}, {logger}) {
  if (dependencies?.php) {
    const {production, development} = dependencies.php;

    await installDependencies({projectRoot, dependencies: production, type: 'production'}, {logger});
    await installDependencies({projectRoot, dependencies: development, type: 'development'}, {logger});
  }
}

export default async function lift({projectRoot, results: {dependencies}}, {logger}) {
  await manageDependencies({dependencies, projectRoot}, {logger});

  return {};
}
