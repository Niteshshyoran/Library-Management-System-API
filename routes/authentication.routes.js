const express = require("express")
// const { UserModel } = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const authRouter = express.Router()

authRouter.post("/", async(req,res)=>{
    const {username, password, name, email}= req.body
    try{
        const newUserReg = new UserModel({username,password,name,email})
        await newUserReg.save()
        res.json({msg:"signup sucessfull"})
    }catch(error){
        res.json(error)
    }


    // try{
    //     bcrypt.hash(password, Number(process.env.SALT_ROUNDS), async(err, hash) => {
    //         if(err){
    //             res.json({err})
    //         }else{
    //             const newUserReg = new UserModel({username,password:hash,name,email})
    //             await newUserReg.save()
    //             res.json({msg:"signup sucessfull"})
    //         }
    //     });
        

    // }catch(error){
    //     res.json(error)
    // }
})


authRouter.post("/login", async(req,res)=>{
    const {username, password}= req.body
    try{
        const matchingUser = await UserModel.findOne({username})
        bcrypt.compare(password,matchingUser.password)

    }catch(error){
        res.json({error})
    }
    
})



module.exports = {authRouter}