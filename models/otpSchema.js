 const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
     
  },
  otp: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // 5 minutes
  },
});

// ✅ Define the model correctly
const Otp = mongoose.model('Otp', otpSchema);

// ✅ Export the model, not the schema
module.exports= Otp;
