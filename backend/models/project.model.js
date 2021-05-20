const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    projectTitle: {
      type: String,
      required: [true, "project title is required"],
    },
    abstract: {
      type: String,
      required: [true, "project title is required"],
    },
    background: {
      type: String,
      required: [true, "project title is required"],
    },
    objectives: {
      type: String,
      required: [true, "project title is required"],
    },
    resources: {
      type: String,
      required: [true, "project title is required"],
    },
    yearInfo: {
      type: String,
    },
    termInfo: {
      type: String,
    },
    status: {
      type: String,
      enum: ["wfa", "cr", "open", "ongoing", "closed"],
    },
    topics: {
      type: [String],
      // storing the topic IDs in this field
    },
    eoisReceived: {
      type: [String],
      // storing the EOI/Application IDs in this field
    },
    isInternship: {
      type: Boolean,
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
    staffId: {
      type: Schema.Types.ObjectId,
      ref: "Staff",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
