'use strict';

import he from 'he';
import mainModel from '../models/main.json';
import React from 'react/addons';
import {ContactForm} from '../components/contact';
import {Navigation}
from '../components/nav';

export default function(req, res) {
  let contactFormHtml = React.renderToString(React.createFactory(ContactForm)());
  let navigationHtml = React.renderToString(React.createFactory(Navigation)({
    items: mainModel.nav
  }));

  let heOptions = {
    encodeEverything: true
  };

  res.render('index', {
    html: {
      contactEmail: he.encode(mainModel.contact.email, heOptions),
      contactEmailLink: he.encode(`mailto:${mainModel.contact.email}`, heOptions),
      contactForm: contactFormHtml,
      nav: navigationHtml
    },
    model: mainModel
  });
}
