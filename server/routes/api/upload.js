/* -----------------------------------|
 *|  Router  ::  API / upload
 *|
 *|  Handles any routes delivered to /api/upload...
 */
var express     = require('express');
var debug       = require('debug')('router:api:upload');
var router      = express.Router();
var multer      = require('multer');
var upload      = multer({ dest: 'upload/'});

// POST: Recieve file uploads
var handleUpload = require('../../controllers').handleUpload;
router.post('*', upload.single('file'), function(req, res) {
  debug('Upload called, processing...');
  res.json(handleUpload(req));
});

debug('Routes initialized successfully');
module.exports = router;