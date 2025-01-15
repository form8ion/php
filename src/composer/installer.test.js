import {execa} from 'execa';

import {describe, it, expect, vi} from 'vitest';
import any from '@travi/any';

import install from './installer.js';

vi.mock('execa');

describe('composer dependencies installer', () => {
  const projectRoot = any.string();
  const dependencies = any.listOf(any.word);

  it('should install the provided dependencies', async () => {
    await install({projectRoot, dependencies, type: any.word});

    expect(execa).toHaveBeenCalledWith('composer', ['require', ...dependencies], {cwd: projectRoot});
  });

  it('should install the provided development dependencies', async () => {
    await install({projectRoot, dependencies, type: 'development'});

    expect(execa).toHaveBeenCalledWith('composer', ['require', ...dependencies, '--dev'], {cwd: projectRoot});
  });

  it('should not install dependencies when none are provided', async () => {
    await install({projectRoot, dependencies: [], type: any.word});

    expect(execa).not.toHaveBeenCalled();
  });
});
