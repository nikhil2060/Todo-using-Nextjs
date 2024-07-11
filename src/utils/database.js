const { default: mongoose } = require("mongoose");

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://NextToDo:NextToDo@nexttodo.xlg3zlb.mongodb.net/?retryWrites=true&w=majority&appName=NextToDo",
      {
        dbName: "NextToDo",
      }
    );
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
  }
};
