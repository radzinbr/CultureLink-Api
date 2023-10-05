import express  from "express";

import getUser from "../controllers/user/GetUser.js";

const router = express.Router()

router.get('/', getUser)


export default router