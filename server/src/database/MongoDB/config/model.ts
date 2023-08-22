import mongoose from 'mongoose';
import dotenv from 'dotenv';
import calculatorHistorySchema from './schema';
dotenv.config();

const MongooseModel = mongoose.model(
  process.env.MONGODB_COLLECTION as string,
  calculatorHistorySchema
);

export default MongooseModel;
