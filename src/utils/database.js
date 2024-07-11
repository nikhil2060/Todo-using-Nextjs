const { default: mongoose } = require("mongoose");

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "NextToDo",
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
  }
};
