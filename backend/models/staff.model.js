const mongoose = require("mongoose");
const { Schema } = mongoose;

const StaffSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Staff Name is required"],
    },
    staff_position: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", StaffSchema);
