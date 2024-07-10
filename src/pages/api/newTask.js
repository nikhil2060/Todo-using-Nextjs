import { asyncError, errorHandler } from "@/middlewares/error";
import { Task } from "@/models/task";
import { connectDB } from "@/utils/database";

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST method are allowed");

  await connectDB();

  const { title, description } = req.body;

  if (!title || !description)
    return errorHandler(res, 400, "Please Enter All fields");

  await Task.create({
    title,
    description,
    user: user?._id,
  });

  res.json({
    success: true,
    message: "Task Created",
  });
});

export default handler;
