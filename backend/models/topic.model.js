const mongoose = require("mongoose");
const { Schema } = mongoose;

const TopicSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "topic Name is required"],
    },
    topic_code: {
      type: String,
    },
    is_a_coordination: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Topic", TopicSchema);
