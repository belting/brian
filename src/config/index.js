'use strict';

import path from 'path';

export default {
  port: process.env.PORT || 3000,
  root: path.join(__dirname, '/..'),
  isDev: process.env.NODE_ENV === 'development'
}
