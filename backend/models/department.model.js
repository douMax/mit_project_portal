const mongoose = require("mongoose");
const { Schema } = mongoose;

const DepartmentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Department Name is required"],
    },
    department_code: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Department", DepartmentSchema);
