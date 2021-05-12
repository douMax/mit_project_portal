const mongoose = require("mongoose");
const { Schema } = mongoose;

const application_recordsSchema = new Schema(
    {
     
      project_id: {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
      student_id: {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
      description: {
        type:String,
      }
        },
      
    
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("application_records", application_recordsSchema);
  
