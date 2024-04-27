import express,{Request,Response} from "express";
import { about, homeDetails } from "../controller/user";
const router = express.Router();

router.get("/home",homeDetails);
router.get("/about",about);

export { router };
