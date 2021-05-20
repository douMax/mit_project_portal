const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema(
  {
    companyName: {
      type: String,
      required: [true, "Company name is required"],
    },
    companyProfile: {
      type: String,
    },
    website: {
      type: String,
    },
    address: {
      type: String,
    },
    companyLogoUrl: {
      type: String,
    },
    isAnAgent: {
      type: Boolean,
      required: [true, "Please specify if this client is an agent or not."],
    },
    companyAbn: {
      type: String,
    },
    contactPersonName: {
      type: String,
    },
    contactPersonTittle: {
      type: String,
    },
    contactPersonEmail: {
      type: String,
    },
    contactPersonProfile: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Client", ClientSchema);
