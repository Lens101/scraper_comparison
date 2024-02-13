import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();
// require('dotenv').config();
let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(!process.env.MONGODB_URI){
    console.log('MONGODB_URI is not defined');
  }
  if(isConnected){
    console.log('=> using existing database connection');
    return;
  }
  try {
    console.log('=> using new database connection');
    await mongoose.connect(String(process.env.MONGODB_URI));
    isConnected = true
  } catch (error) {
    console.log('error', error);
  }

}