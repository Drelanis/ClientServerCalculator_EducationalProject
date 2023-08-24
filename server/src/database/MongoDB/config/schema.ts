import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const calculatorHistorySchema = new mongoose.Schema(
  {
    created_date: {
      type: Date,
      default: Date.now,
    },
    expression: {
      type: String,
      required: true,
    },
    result: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default calculatorHistorySchema;
