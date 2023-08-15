import mongoose from 'mongoose';

const mongoDBUrl =
  'mongodb+srv://DenysBadaka:5872424@cluster0.z3r4qc1.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDBUrl);

const calculatorHistorySchema = new mongoose.Schema(
  {
    calculation_date: {
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

const MongooseModel = mongoose.model(
  'calculator_history',
  calculatorHistorySchema
);

export default MongooseModel;
