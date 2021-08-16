const mongoose = require("mongoose");
const { Schema } = mongoose;

const StaffSchema = new Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    username: {
      type: String,
      required: true
    },
    mit_email: {
      type: String,
      required: [true, "email is required"],
    },
    phone: {
      type: Number
    },
    staff_position: {
      type: String,
      required: [true, "Staff position is required"],
    },
    topics: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", StaffSchema);
