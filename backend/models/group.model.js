const mongoose = require("mongoose");
const { Schema } = mongoose;

const GroupSchema = new Schema(
  {
    Groupid: {
        type: String,
      },
      Groupname:{
          type:String,
      },
      Supervisorid: {
          type: String,
        },
    }
);

module.exports = mongoose.model("Group", GroupSchema);