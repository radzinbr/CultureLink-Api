import express  from "express";

import Userdel from '../controllers/user/getdel.js'
import GetAdd from "../controllers/user/GetaddUser.js";
import GetUpd from "../controllers/user/GetUpd.js";
import GetUser from "../controllers/user/GetUser.js";

const router = express.Router()

router.get('/', GetUser)
router.put('/', GetUpd)
router.post('/', GetAdd)
router.delete('/',Userdel)



export default router