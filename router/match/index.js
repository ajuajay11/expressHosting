const express = require('express');
const router = express.Router();
const Match = require('../../models/matchSchema')
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/create", async (req, res) => {
  try {
    const { matchId, password } = req.body;

    // Validation
    if (!matchId || !password) {
      return res.status(400).json({ message: "matchId and password required" });
    }

    // Check if match already exists
    const existing = await Match.findOne({ matchId });
    if (existing) {
      return res.status(409).json({ message: "Match ID already exists" });
    }

    // Create match
    const newMatch = new Match({
      matchId,
      password,
      participants: [] // empty at start
    });

    await newMatch.save();

    res.status(201).json({
      message: "Match created successfully",
      match: newMatch
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error creating match" });
  }
});

module.exports = router;