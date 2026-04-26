const eventRepo = require("../repositories/eventRepository");

exports.createEvent = async(data,userId)=>{

  data.organizer = userId;

  return await eventRepo.createEvent(data);
};

exports.getEvents = async(filter)=>{
  return await eventRepo.getAllEvents(filter);
};

exports.getEvent = async(id)=>{
  return await eventRepo.getEventById(id);
};

exports.updateEvent = async(id,data)=>{
  return await eventRepo.updateEvent(id,data);
};

exports.deleteEvent = async(id)=>{
  return await eventRepo.deleteEvent(id);
};