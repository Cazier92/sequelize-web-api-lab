const router = require('express').Router()
const paintsCtrl = require('../controllers/paints.js')


router.get('/', paintsCtrl.index)
router.get('/:id', paintsCtrl.show)

router.post('/', paintsCtrl.create)

router.put('/:id', paintsCtrl.update)

router.delete('/:id', paintsCtrl.delete)


module.exports = router