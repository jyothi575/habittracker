import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Reward from '../models/Reward.js';

dotenv.config();

const rewards = [
  {
    title: '🏅 Bronze Badge',
    description: 'Complete a 7-day streak',
    costPoints: 50,
    icon: '🏅'
  },
  {
    title: '🥈 Silver Badge',
    description: 'Complete a 30-day streak',
    costPoints: 200,
    icon: '🥈'
  },
  {
    title: '🥇 Gold Badge',
    description: 'Complete a 100-day streak',
    costPoints: 500,
    icon: '🥇'
  },
  {
    title: '⭐ Achievement Star',
    description: 'Reach 1000 points',
    costPoints: 100,
    icon: '⭐'
  },
  {
    title: '🎯 Goal Master',
    description: 'Complete all daily goals for a week',
    costPoints: 150,
    icon: '🎯'
  },
  {
    title: '🔥 On Fire',
    description: 'Maintain a 14-day streak',
    costPoints: 120,
    icon: '🔥'
  },
  {
    title: '💎 Premium Status',
    description: 'Get exclusive features',
    costPoints: 300,
    icon: '💎'
  },
  {
    title: '👑 Legend Badge',
    description: 'Become a top performer',
    costPoints: 600,
    icon: '👑'
  }
];

async function seedRewards() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing rewards
    await Reward.deleteMany({});
    console.log('Cleared existing rewards');

    // Insert new rewards
    const created = await Reward.insertMany(rewards);
    console.log(`✅ Successfully seeded ${created.length} rewards`);

    rewards.forEach((r, idx) => {
      console.log(`  ${idx + 1}. ${r.title} (${r.costPoints} pts)`);
    });

    process.exit(0);
  } catch (err) {
    console.error('Error seeding rewards:', err.message);
    process.exit(1);
  }
}

seedRewards();
