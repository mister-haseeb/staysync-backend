const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
{
  title:{
    type:String,
    required:true
  },

  description:{
    type:String
  },

  location:{
    type:String,
    required:true
  },

  date:{
    type:Date,
    required:true
  },

  organizer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  rsvps:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  ]

},
{timestamps:true}
);

module.exports = mongoose.model("Event", EventSchema);