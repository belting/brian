'use strict';

import runSequence from 'run-sequence';

export default function() {
  return callback => {
    runSequence('clean-js-client', 'build-js-client', 'build-html', callback);
  }
}
