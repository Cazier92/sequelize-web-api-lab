const router = require('express').Router()
const neutralMixCtrl = require('../controllers/neutralmixes.js')

// Routes

router.get('/', neutralMixCtrl.index)

router.post('/', neutralMixCtrl.create)
router.post('/:mixtureId', neutralMixCtrl.associatePaint)

module.exports = router