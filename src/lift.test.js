import {describe, it, expect, vi} from 'vitest';
import any from '@travi/any';

import {install as installDependencies} from './composer/index.js';
import lift from './lift.js';

vi.mock('execa');
vi.mock('./composer/index.js');

describe('lifter', () => {
  const projectRoot = any.string();

  it('should not attempt to install dependencies when none are included in the results', async () => {
    await lift({projectRoot, results: any.simpleObject()});

    expect(installDependencies).not.toHaveBeenCalled();
  });

  it('should not attempt to install dependencies when none are included in the results', async () => {
    await lift({projectRoot, results: {dependencies: any.simpleObject()}});

    expect(installDependencies).not.toHaveBeenCalled();
  });

  it('should lift the project', async () => {
    const productionDependencies = any.simpleObject();
    const developmentDependencies = any.simpleObject();
    const results = await lift({
      projectRoot,
      results: {dependencies: {php: {production: productionDependencies, development: developmentDependencies}}}
    });

    expect(results).toEqual({});
    expect(installDependencies).toHaveBeenCalledWith({
      projectRoot,
      dependencies: productionDependencies,
      type: 'production'
    });
    expect(installDependencies).toHaveBeenCalledWith({
      projectRoot,
      dependencies: developmentDependencies,
      type: 'development'
    });
  });
});
