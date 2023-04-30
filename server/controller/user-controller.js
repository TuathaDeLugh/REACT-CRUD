import { request, response } from "express";
import User from "../schema/user-schema.js";

export const adduser =async (request,response)=>{
    // console.log("hello");
    const user = request.body;
    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    }
    catch (error){
        response.status(409).json({message:error.message});
    }
}

export const getusers = async(request,response)=>{
     try{
      const users = await  User.find({});
        response.status(200).json(users);
     }
     catch(error){
        response.status(404).json({message:error.message});
     }
}
export const getoneuser = async(request,response)=>{
    try{
        // console.log(request.params.id);
        const users = await  User.findById(request.params.id);
        // const users = await  User.find({_id:request.params.id});
          response.status(200).json(users);
       }
       catch(error){
          response.status(404).json({message:error.message});
       }
}
export const edituser = async(request,response)=>{
    let user =request.body;
    const edituser = new User(user);
    try{
        await User.updateOne({_id:request.params.id},edituser);
        response.status(201).json(edituser);

    }
    catch(error)
    {
        response.status(409).json({message:error.message});

    }
}
export const deleteuser = async(request,response)=>{
    try{
        await User.deleteOne({_id:request.params.id});
        response.status(200).json({message:'User Deleted'}); 
    }
    catch(error){
        response.status(409).json({message:error.message});
    }

}