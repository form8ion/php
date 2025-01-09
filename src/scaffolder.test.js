import {expect, describe, it, vi} from 'vitest';
import any from '@travi/any';

import {scaffold as scaffoldComposer} from './composer/index.js';
import scaffold from './scaffolder.js';

vi.mock('./composer/index.js');

describe('scaffolder', () => {
  it('should scaffold details of a php project', async () => {
    const projectRoot = any.string();

    expect(await scaffold({projectRoot})).toEqual({});
    expect(scaffoldComposer).toHaveBeenCalledWith({projectRoot});
  });
});
