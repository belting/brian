'use strict';

import runSequence from 'run-sequence';

export default function() {
  return callback => {
    runSequence('clean-css', 'build-css', 'build-html', callback);
  }
}
