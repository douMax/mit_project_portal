const mongoose = require("mongoose");
const { Schema } = mongoose;

const eoiSchema = new Schema(
  {
    project_id: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "Student or Staff",
      required: true,
    },
    status: {
      type: String,
      default: "pending"
    },
    interest: {
      type: String,
    },
    achievement: {
      type: String,
    },
    experience: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EOI", eoiSchema);
