'use strict';

import del from 'del';

export default function(gulp, plugins, options) {
  return callback => del(options.dest.root, callback);
}
