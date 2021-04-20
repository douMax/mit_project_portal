const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    project_title: {
      type: String,
      required: [true, "project title is required"],
    },
    abstract: {
      type: String,
    },
    background: {
      type: String,
    },
    objectives: {
      type: String,
    },
    resources: {
      type: String,
    },
    term_info: {
      type: String,
    },
    is_open: {
      type: Boolean,
    },
    is_approved: {
      type: Boolean,
    },
    topics: {
      type: [String],
    },
    is_internship: {
      type: Boolean,
    },
    client_id: {
      type: String,
    },
    staff_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
