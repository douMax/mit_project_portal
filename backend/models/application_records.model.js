const mongoose = require("mongoose");
const { Schema } = mongoose;

const application_recordsSchema = new Schema(
    {
      application_title: {
        type: String,
        required: [true, "Application title is required"],
      },
      project_id: {
        type: String,
      },
      date_of_application:{
          type:Boolean,
      },
      group_id: {
          type: String,
        },
        date_of_decision: {
          type: Boolean,
        },
        status: {
          type: String,
        },
      
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("application_records", application_recordsSchema);
  
