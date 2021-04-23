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
    address: {
      type: String,
    },
    is_an_agent: {
      type: Boolean,
      required: [true, "Is agent or an information handler"],
    },
    abn: {
      type: String,
    },
    contact_name: {
      type: String,
    },
    contact_tittle: {
      type: String,
    },
    contact_mail_id: {
      type: String,
    },
    contact_person_profile: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Client", ClientSchema);
