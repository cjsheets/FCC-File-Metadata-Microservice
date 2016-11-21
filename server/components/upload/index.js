'use strict';
/* -----------------------------------|
 *|  Define Upload Routes
 */

var express = require('express');
var controller = require('./upload.controller');
const debug = require('debug')('component:upload');
var multer = require('multer');
var upload = multer({ dest: 'upload/'});

var router = express.Router();

router.post('*', upload.single('file'), controller.index);
debug('Initialized /upload endpoint...');

module.exports = router;