const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



const getUsers = async (req,res,next) => {
  let users;
  try {
    users = await User.find()
  } catch (error) {
    console.log(error)
  }
  if(!users){
    res.status(404).json({message:'no user found'})
  }
  
  return res.status(200).json(users)
}
const register = async (req, res, next) => {
    const {
      username,
      email,
      password,
      img,
      expenseCategories
     
      
    } = req.body;
  
    if (!username || !email || !password) {
      res.status(400).json({ message: "Please add all fields" });
    }
  
    //check if user exists
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400)
      return res.json("user already exists");
    }
  
  
    //hashpassord
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    //createUser
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      img,

    })
  
    if(user){
      res.status(201).json(user);
    } else {
      res.status(400).json({message:"invalid user credentials"});
    }
    const { id, isAdmin } = user;
   const token = jwt.sign({ username, id, isAdmin }, process.env.SECRET, {
  expiresIn: "2d",
});
  }


const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  !user && res.status(400).json("user cant be found");
  if (user && (await bcrypt.compare(password, user.password))) {
    const { username, id, isAdmin } = user;
    const token = jwt.sign({ username, id, isAdmin }, process.env.SECRET, {
      expiresIn: "2d",
    });

    res.status(200).json({
      ...user._doc,
      token,
    });
  } else {
    res.status(400).json("invalid user credentials");
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "2d",
  });
};

const updateUserInfo = async (req,res) => {
  const userId = req.params.id;
  const updatedInfo = req.body;

  const upUserInfo = await User.findByIdAndUpdate(userId ,updatedInfo, { new: true });

  if (!upUserInfo) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(upUserInfo);
}
const deleteUser = async (req,res) => {
    const  userId = req.params.id;
  
    const user = await User.findByIdAndDelete(userId);
  
    if (!user ) {
      return res.status(404).json({ message: "user   not found" });
    }
  
    res.status(200).json({ message: "user  deleted successfully" });
  }
module.exports = {
    getUsers,
    register,
    loginUser,
    updateUserInfo,
    deleteUser
}