const mongoose = require("mongoose");
const { Schema } = mongoose;

const StaffSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Staff Name is required"],
    },
    Frist_name: {
      type: String,
    },
    Last_name: {
      type: String,
    },
    staff_position: {
      type: String,
      required: [true, "Staff position is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", StaffSchema);
