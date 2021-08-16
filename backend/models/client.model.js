const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema(
  {
    company_name: {
      type: String,
      required: [true, "Company name is required"],
    },
    company_profile: {
      type: String,
    },
    website: {
      type: String,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String
    },
    username: {
      type: String
    },
    Phone: {
      type: Number
    },
    office_phone: {
      type: Number
    },
    job_position: {
      type: String
    }
    // address: {
    //   type: String,
    // },
    // companyLogoUrl: {
    //   type: String,
    // },
    // isAnAgent: {
    //   type: Boolean,
    //   required: [true, "Please specify if this client is an agent or not."],
    // },
    // companyAbn: {
    //   type: String,
    // },
    // contactPersonName: {
    //   type: String,
    // },
    // contactPersonTittle: {
    //   type: String,
    // },
    // contactPersonEmail: {
    //   type: String,
    // },
    // contactPersonProfile: {
    //   type: String,
    // },
    // password: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Client", ClientSchema);
