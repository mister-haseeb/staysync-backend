const Event = require("../models/Event");

exports.createEvent = (data)=>{
  return Event.create(data);
};

exports.getAllEvents = (filter)=>{
  return Event.find(filter).populate("organizer","name");
};

exports.getEventById = (id)=>{
  return Event.findById(id).populate("organizer","name");
};

exports.updateEvent = (id,data)=>{
  return Event.findByIdAndUpdate(id,data,{new:true});
};

exports.deleteEvent = (id)=>{
  return Event.findByIdAndDelete(id);
};