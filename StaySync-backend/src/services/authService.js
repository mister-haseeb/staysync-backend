const userRepo = require("../repositories/userRepository");
const generateToken = require("../utils/generateToken");

exports.register = async(data)=>{

  const userExists = await userRepo.findByEmail(data.email);

  if(userExists){
    throw new Error("User already exists");
  }

  const user = await userRepo.createUser(data);

  return {
    user,
    token: generateToken(user._id)
  };
};

exports.login = async(email,password)=>{

  const user = await userRepo.findByEmail(email);

  if(!user || !(await user.matchPassword(password))){
    throw new Error("Invalid credentials");
  }

  return {
    user,
    token: generateToken(user._id)
  };

};