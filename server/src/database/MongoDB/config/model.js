import mongoose from 'mongoose';
import dotenv from 'dotenv';
import calculatorHistorySchema from './schema.js';
dotenv.config();

const MongooseModel = mongoose.model(
  process.env.MONGODB_COLLECTION,
  calculatorHistorySchema
);

export default MongooseModel;
