import User from "../model/userModel.js"; // Corrected import path to userModel.js
import validator from "validator";
import bcrypt from "bcryptjs";
import { gentoken } from '../config/token.js'; // Import gentoken from token.js (assuming 'utils' folder)
import e from "express";

export const registration = async (req, res) => {
   try{   
   const { name, email, password } = req.body;
     const existingUser = await User.findOne({ email });
 
         if (existingUser) {
               return res.status(400).json({ message: "User already exists" });
         }
         if (!validator.isEmail(email)) {
               return res.status(400).json({ message: "Invalid email format" });
          // Hash the password
          
      }
      if (password.length < 8) {
         return res.status(400).json({ message: "Password must be at least 6 characters long" });
      }
      let hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
         name,
         email,
         password: hashedPassword,
      });
      let token=  await gentoken(user._id);
      res.cookie("token", token, {
         httpOnly: true,
         secure: false,
 // Set secure flag in production
         sameSite: "strict",
         maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });
      return res.status(201).json(user)
   } catch(error){
      console.error("Registration error:", error);
      return res.status(500).json({ message: "Internal server error" });
     
   }
}

export const login = async (req, res) => {
   try {
      let { email, password } = req.body;
      let user = await User.findOne({email})
      if (!user) {
         return res.status(404).json({ message: "User not found" });
      }
      let isMatch = await bcrypt.compare(password, user.password);
     if (!isMatch) {
         return res.status(400).json({ message: "Incorrect Password" });
      }
 let token=  await gentoken(user._id);
      res.cookie("token", token, {
         httpOnly: true,
         secure: false,
 // Set secure flag in production
         sameSite: "strict",
         maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });
     return res.status(201).json({ user });
   }
   catch (error){
      console.error("Login error:", error);
      return res.status(500).json({ message: "Internal server error" });
   }
}

export const logout = async (req, res) => {
   try {
      res.clearCookie("token");
      return res.status(200).json({ message: "Logout successful" });
   } catch (error) {
      console.error("Logout error:", error);
      return res.status(500).json({ message: "Internal server error" });
   }
};