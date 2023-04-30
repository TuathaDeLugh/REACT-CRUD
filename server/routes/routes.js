import  express from "express";
import { adduser,getusers,getoneuser,edituser,deleteuser } from "../controller/user-controller.js";
const router = express.Router();

router.post('/add',adduser);
router.get('/all',getusers);
router.get('/:id',getoneuser);
router.put('/:id',edituser);
router.delete('/:id',deleteuser);


export default router;
