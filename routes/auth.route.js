const express = require('express');
const { signInUser, checkToken  } = require('../controllers/auth.controller.js');
const { getSubdist  } = require('../controllers/subdist.controller.js');
const { getChiller  } = require('../controllers/chiller.controller.js');
const { history  } = require('../controllers/history.controller.js');

const { verifyToken } = require('../middleware/auth.middleware');
const router = express.Router();

//login route
router.post('/', signInUser);
router.get('/check-token', verifyToken, checkToken); // Verifikasi token sebelum handler
router.get('/browse', history); // Verifikasi token sebelum handler

//get chiller
router.post('/chiller', getChiller); 
router.post('/subdist', getSubdist); 

module.exports = router;
