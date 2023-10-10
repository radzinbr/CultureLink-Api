import express  from "express";

import GetUpd from "../controllers/user/GetUpd.js";
import GetUser from "../controllers/user/GetUser.js";

const router = express.Router()

router.get('/', GetUser)
router.put('/', GetUpd)


export default router