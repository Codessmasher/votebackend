import express from "express";
const router=express.Router();

import {signup} from "../controllers/users/signup.js";
import {signin} from "../controllers/users/signin.js";  
import addcandidate from "../controllers/candidates/addcandidate.js";  
import candidates from "../controllers/candidates.js";  
import updatecandidate from "../controllers/candidates/updatecandidate.js";  
import updateuser from "../controllers/users/updateuser.js";  
import profile from "../controllers/users/profile.js";  
import deleteuser from "../controllers/users/deleteuser.js";  
import deletecandidate from "../controllers/candidates/deletecandidate.js";  
import vote from "../controllers/vote.js";  
import results from "../controllers/results.js";  
import { jwtAuth } from "../middlewares/jwtAuth.js";


// All routes
router.post("/users/signup",signup); //signup a user or admin
router.post("/users/signin",signin); //login a user or admin
router.post("/candidates/addcandidate",jwtAuth,addcandidate); //create a new candidate

router.get("/candidates",candidates); //get list of candidates
router.get("/candidates/:id",candidates); //get info of a candidate
router.get("/users/profile",jwtAuth,profile); //update info of a candidate
router.patch("/candidates/updatecandidate/:id",jwtAuth,updatecandidate); //update info of a candidate
router.patch("/users/updateuser/:id",jwtAuth,updateuser); //update info of a user
router.delete("/candidates/deletecandidate/:id",jwtAuth,deletecandidate); //delete info of a candidate
router.delete("/users/deleteuser/:id",jwtAuth,deleteuser); //delete info of a user
router.post("/vote/:id",jwtAuth,vote); //vote a candidate

router.get("/results",results); //get real time results

export default router;