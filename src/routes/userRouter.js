import express  from "express";

import Userdel from '../controllers/user/userdel.js'
import create from "../controllers/user/createuser.js";
import upduser from "../controllers/user/upduser.js";
import GetUser from "../controllers/user/GetUser.js";
import userall from "../controllers/user/allusers.js";

const router = express.Router()

router.get('/', GetUser)
router.get('/list',userall)
router.put('/', upduser)
router.post('/', create)
router.delete('/',Userdel)



export default router