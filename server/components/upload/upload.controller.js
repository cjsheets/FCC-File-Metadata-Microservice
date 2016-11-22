'use strict';
/* -----------------------------------|
 *|  Use Multer to process uploads
 */

import multer from 'multer';
import bodyParser from 'body-parser';
import path from 'path';
const debug = require('debug')('component:up-cont');


// Perform file upload
export function index(req, res) {
	debug('recieved upload request');
  // https://goo.gl/f77EZq
  
	debug(req.body); //form fields
	/* example output:
	{ title: 'abc' }
	 */
	debug(req.file); //form files
	/* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
	 */
  var returnFile = req.file;
  delete returnFile.destination;
  delete returnFile.filename;
  delete returnFile.path;
	res.end(JSON.stringify(returnFile));

}
