const mongoose = require("mongoose");
const { Schema } = mongoose;

const eoiSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    applicantId: {
      type: Schema.Types.ObjectId,
      ref: "Student or Staff",
      required: true,
    },
    eoiStatus: {
      type: String,
      required: true,
      enum: ["wfa", "approved", "rejected"],
    },
    interestInProject: {
      type: String,
    },
    achievementGoals: {
      type: String,
    },
    previousExperience: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EOI", eoiSchema);
