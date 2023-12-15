//Register
const userRegisterCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "user registered"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

//login
const userLoginCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "user login"
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
  try {
    res.json({
      status: "Success",
      data: "Profile route"
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