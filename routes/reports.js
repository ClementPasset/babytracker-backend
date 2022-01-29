const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const reportCtrl = require('../controllers/reports');

router.get('/:id', auth, reportCtrl.getReports);
router.post('/', auth, reportCtrl.addReport);
router.put('/:id/', auth, reportCtrl.updateReport);
router.delete('/:id/', auth, reportCtrl.deleteReport);

module.exports = router;