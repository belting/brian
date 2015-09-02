'use strict';

import open from 'open';

export default function(gulp, plugins, options) {
  return () => {
    plugins.nodemon({
      script: options.dest.serverJs,
      env: {
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD
      }
    });

    open(`http://localhost:${options.port}`);
  }
}
