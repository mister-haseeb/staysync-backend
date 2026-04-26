const User = require("../models/User");

exports.createUser = (data)=>{
  return User.create(data);
};

exports.findByEmail = (email)=>{
  return User.findOne({email});
};

exports.findById = (id)=>{
  return User.findById(id);
};