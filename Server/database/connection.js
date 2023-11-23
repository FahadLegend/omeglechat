const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongodb connection string
   // const con = await mongoose.connect(process.env.MONGO_URI);
    const con = await mongoose.connect("mongodb+srv://alfarism993:Zainab1981@ome.xqqio07.mongodb.net/ome?retryWrites=true&w=majority");
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
