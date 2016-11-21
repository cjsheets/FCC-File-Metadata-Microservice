'use strict';
/* -----------------------------------|
 *|  Define Upload Routes
 */

var express = require('express');
var controller = require('./upload.controller');
const debug = require('debug')('api:search');

var router = express.Router();

router.get('*', controller.index);
debug('Initialized /upload endpoint...');

module.exports = router;