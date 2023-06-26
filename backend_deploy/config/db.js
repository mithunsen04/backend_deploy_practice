const mongoose = require('mongoose');
//const mongourl =mongodb+srv://backenddeploy:deploy123@cluster0.a46c6hx.mongodb.net/?retryWrites=true&w=majority
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

module.exports = connectDB;
//done 