import * as mongoose from 'mongoose';

export const LogSchema = new mongoose.Schema({
    id: String,
    type: String,
    name: String,
    log: Object,
    age: String
  });