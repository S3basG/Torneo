module.exports = mongoose.model('User', userSchema);
import mongoose from 'mongoose';

// Making schema for tourney brackets
const TourneySchema = new mongoose.Schema({
    name: { type: String, required: true },
    participants: { type: [String], required: true }, // List of participant names
    brackets: { type: Array, default: [] }, // Stores matchups
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Tourney', TourneySchema);