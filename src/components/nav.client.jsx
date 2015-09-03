/* global React */

'use strict';

import mainModel from '../models/main.json';
import {
  Navigation // eslint-disable-line no-unused-vars
}
from './nav.jsx';

React.render(<Navigation items={mainModel.nav} />, document.getElementById('nav'));
