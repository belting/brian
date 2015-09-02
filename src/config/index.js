'use strict';

import path from 'path';

export default {
  root: path.join(__dirname, '/..'),
  isDev: process.env.NODE_ENV === 'development'
}
