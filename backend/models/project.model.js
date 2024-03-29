const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "project title is required"],
    },
    background: {
      type: String,
      required: [true, "project background is required"],
    },
    abstract: {
      type: String,
      required: [true, "project abstract is required"],
    },
    objectives: {
      type: String,
      required: [true, "project objectives is required"],
    },
    resources: {
      type: String,
      required: [true, "project resources is required"],
    },
    year: {
      type: String,
    },
    trimester: {
      type: String,
    },
    status: {
      type: String,
      enum: ["open", "rejected", "pending", "ongoing", "completed"],
    },
    topics: {
      type: [String],
    },
    assigned: {
      type: [Object],
      default: []
    },
    eoi: {
      type: [Object],
      default: []
    },
    supervisorEOI: {
      type: [Object],
      default: []
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
    supervisorId: {
      type: String
    },
    groupId: {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
