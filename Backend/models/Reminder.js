import mongoose from 'mongoose'

const reminderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  habitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Habit' },
  time: String, // HH:mm
  timezone: String,
  enabled: { type: Boolean, default: true },
  lastSentAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Reminder', reminderSchema)
