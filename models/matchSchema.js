const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
  isConnected: { type: Boolean, default: true } // for socket tracking only
});

const matchSchema = new mongoose.Schema({
  matchId: { type: String, required: true, unique: true },  // room ID
  password: { type: String, required: true },               // room password

  participants: [participantSchema] // users who joined
});
 
const Match = mongoose.model("Match", matchSchema);

module.exports = Match;