const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema(
  {
    mit_email: {
      type: String,
      required: [true, "email is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    username: {
      type: String,
      required: true
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    password: {
      type: String,
    },
    mit_student_id: {
      type: String,
      required: true
    },
    phone: {
      type: Number
    },
    groupId: {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
    is_enrolled_in_course: {
      type: Boolean,
      default: true,
    },
    is_enrolled_in_capstone_projects: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", StudentSchema);
