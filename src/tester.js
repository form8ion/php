import {fileExists} from '@form8ion/core';

export default function projectLanguageIsPhp({projectRoot}) {
  return fileExists(`${projectRoot}/composer.json`);
}
