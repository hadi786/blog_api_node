const bcrypt = require("bcryptjs");
const User = require("../../models/User/User");
const generateToken = require("../../utils/generateToken");
const getTokenFromHeader = require("../../utils/getTokenFromHeader");

//Register
const userRegisterCtrl = async (req, res) => {
  const {first_name, last_name, email, password} = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({email});
    if(userFound){
      return res.json({
        msg: "User already exist on given email"
      })
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create the user
    const user = await User.create({
      first_name,
      last_name,
      email,
      password: hashedPassword
    })

    return res.json({
      status: "Success",
      data: user
    })
    
  } catch (error) {
    res.json(error.messages)
  }
};

//login
const userLoginCtrl = async(req, res) => {
  const {email, password} = req.body;
  try {
    //Check if email exist
    const userFound = await User.findOne({email});
    
    if(!userFound){
      return res.json({
        msg: "Wrong login credentials"
      })
    }

    //validaity of the password
    const isPasswordMatched = await bcrypt.compare(password, userFound.password);
    if(!isPasswordMatched){
      return res.json({
        msg: "Wrong login credentials"
      })
    }

    res.json({
      status: "Success",
      data: {
        id: userFound._id,
        first_name: userFound.first_name,
        last_name: userFound.last_name,
        email: userFound.email,
        isAdmin: userFound.isAdmin,
        token: generateToken(userFound._id)
      },
    })
  } catch (error) {
    res.json(error.messages)
  }
};

// All User
const usersCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "All User route"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

//update user
const userUpdateCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "update User route"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

//View single user profile
const userProfileCtrl = async(req, res) => {
  console.log(req.userAuth)
  const {id} = req.params;
  try {
    const user = await User.findById(id);
    res.json({
      status: "Success",
      data: user
    })
  } catch (error) {
    res.json(error.messages)
  }
};

//delete user
const userDeleteCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "delete User route"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

module.exports = {
  userRegisterCtrl,
  userLoginCtrl,
  usersCtrl,
  userUpdateCtrl,
  userProfileCtrl,
  userDeleteCtrl
}