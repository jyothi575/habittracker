import mongoose from 'mongoose'

const challengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startsAt: Date,
  endsAt: Date,
  goalType: { type: String, enum: ['streak','checkins','custom'], default: 'streak' },
  goalValue: { type: Number, default: 7 },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Challenge', challengeSchema)
