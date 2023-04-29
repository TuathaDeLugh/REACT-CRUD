import  express from "express";
import { adduser,getusers,getoneuser } from "../controller/user-controller.js";
const router = express.Router();

router.post('/add',adduser);
router.get('/all',getusers);
router.get('/:id',getoneuser);

export default router;
