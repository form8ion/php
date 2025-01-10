import {describe, it, expect} from 'vitest';
import any from '@travi/any';
import zip from 'lodash.zip';

import formatDocumentation from './documentation-formatter.js';

describe('documentation formatter', () => {
  it('should compose the documentation sections', async () => {
    const headings = any.listOf(any.word);
    const sections = headings.map(() => any.sentence());

    expect(await formatDocumentation({contributing: Object.fromEntries(zip(headings, sections))})).toEqual({
      contributing: headings
        .reduce((acc, heading, index) => `${acc}### ${heading}\n\n${sections[index]}\n\n`, '')
        .trim()
    });
  });
});
