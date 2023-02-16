const router = require('express').Router()
const paintsCtrl = require('../controllers/paints.js')


router.get('/', paintsCtrl.index)

router.post('/', paintsCtrl.create)

router.put('/:id', paintsCtrl.update)


module.exports = router