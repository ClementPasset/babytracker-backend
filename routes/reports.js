const express = require('express');
const router = express.Router();

const reportCtrl = require('../controllers/reports');

router.get('/', reportCtrl.getReports);
router.post('/', reportCtrl.addReport);
router.put('/:id/', reportCtrl.updateReport);
router.delete('/:id/', reportCtrl.deleteReport);

module.exports = router;