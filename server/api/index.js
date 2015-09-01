'use strict';

import * as mail from './mail';
import express from 'express';

let router = express.Router();

router.post('/mail', mail.send);

export default router;
