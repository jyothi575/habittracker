import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // Points and rewards for gamification
  points: { type: Number, default: 0 },
  badges: [{ type: String }],
  // Social features
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  friendRequests: [
    {
      from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      status: { type: String, enum: ['pending','accepted','rejected'], default: 'pending' },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  // Device push subscriptions for reminders (optional)
  pushSubscriptions: [
    {
      endpoint: String,
      keys: Object,
      createdAt: { type: Date, default: Date.now }
    }
  ],
});

export default mongoose.model("User", userSchema);
