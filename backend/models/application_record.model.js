const mongoose = require("mongoose");
const { Schema } = mongoose;

const ApplicationRecordsSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ApplicationRecords", ApplicationRecordsSchema);
