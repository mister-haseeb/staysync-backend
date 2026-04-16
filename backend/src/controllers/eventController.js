const eventService = require("../services/eventService");

exports.createEvent = async(req,res)=>{

  const event = await eventService.createEvent(req.body, req.user._id);

  res.json(event);
};

exports.getEvents = async(req,res)=>{

  const events = await eventService.getEvents({});

  res.json(events);
};

exports.getEvent = async(req,res)=>{

  const event = await eventService.getEvent(req.params.id);

  res.json(event);
};

exports.updateEvent = async(req,res)=>{

  const event = await eventService.updateEvent(req.params.id,req.body);

  res.json(event);
};

exports.deleteEvent = async(req,res)=>{

  await eventService.deleteEvent(req.params.id);

  res.json({message:"Event deleted"});
};