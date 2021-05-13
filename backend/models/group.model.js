const mongoose = require("mongoose");
const { Schema } = mongoose;

const GroupSchema = new Schema({
  Groupid: {
    type: String,
  },
  Groupname: {
    type: String,
  },
  Supervisorid: {
    type: String,
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
});

module.exports = mongoose.model("Group", GroupSchema);
