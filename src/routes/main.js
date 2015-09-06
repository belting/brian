'use strict';

import mainModel from '../models/main.json';
import React from 'react/addons';
import {ContactForm} from '../components/contact';
import {
  Navigation
}
from '../components/nav';

export default function(req, res) {
  let contactFormHtml = React.renderToString(
    React.createFactory(ContactForm)()
  );
  let navigationHtml = React.renderToString(
    React.createFactory(Navigation)({
      items: mainModel.nav
    })
  );

  res.render('index', {
    html: {
      contactForm: contactFormHtml,
      nav: navigationHtml
    },
    model: mainModel
  });
}
