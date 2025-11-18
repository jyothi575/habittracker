import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  category: String,
  priority: { type: Number, default: 1 },
  frequency: { type: String, enum: ["daily", "weekly", "timesPerWeek"], default: "daily" },
  startDate: { type: Date, default: Date.now },
  // Gamification fields
  lastCheckinAt: { type: Date, default: null },
  currentStreak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  // Goal configuration: supports daily, weekly or timesPerWeek
  goal: {
    type: {
      type: String,
      enum: ["daily", "weekly", "timesPerWeek"],
      default: "daily",
    },
    // For timesPerWeek, value indicates how many times per week
    value: { type: Number, default: 1 },
  },
  // Reminder schedules (optional)
  reminders: [
    {
      time: String, // e.g. "08:00" (HH:mm)
      timezone: String, // optional timezone identifier
      enabled: { type: Boolean, default: false },
    },
  ],
});

export default mongoose.model("Habit", habitSchema);
