import { Router } from "express";
import * as orderCtrl from '../controllers/orders.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', orderCtrl.create)
router.get('/', orderCtrl.index)
router.get('/:id', orderCtrl.show)

export {
  router
}