const { default: mongoose } = require("mongoose");

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "NextToDo",
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
  }
};
