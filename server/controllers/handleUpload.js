var multer        = require('multer');
var bodyParser    = require('body-parser');
var path          = require('path');
var debug         = require('debug')('controller:handleUpload');

/**
 * This controller searches the database for a
 * users ID and returns all events they're attending
 *
 * @param: string - `user_id` per their server-side session
 * 
 * @return: [{venue_id: venue_id, user_id: user_id}, ...]
 *           containing all venue_ids user is attending
 */

module.exports = function(req) {
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
	return returnFile;
}