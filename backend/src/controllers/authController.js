const authService = require("../services/authService");

exports.register = async(req,res)=>{

  const result = await authService.register(req.body);

  res.json(result);
};

exports.login = async(req,res)=>{

  const {email,password} = req.body;

  const result = await authService.login(email,password);

  res.json(result);
};

exports.getMe = async(req,res)=>{
  res.json(req.user);
};