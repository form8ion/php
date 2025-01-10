import {expect, describe, it, vi} from 'vitest';
import any from '@travi/any';

import {scaffold as scaffoldComposer} from './composer/index.js';
import scaffold from './scaffolder.js';

vi.mock('./composer/index.js');

describe('scaffolder', () => {
  it('should scaffold details of a php project', async () => {
    const projectRoot = any.string();
    const projectName = any.word();
    const description = any.sentence();

    expect(await scaffold({projectRoot, projectName, description})).toEqual({});
    expect(scaffoldComposer).toHaveBeenCalledWith({projectRoot, projectName, description});
  });
});
