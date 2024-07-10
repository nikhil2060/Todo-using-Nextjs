import { User } from "@/models/user";
import { connectDB } from "@/utils/database";
import { cookieSetter, generateToken } from "@/utils/features";
import bcrypt from "bcrypt";

const { asyncError, errorHandler } = require("@/middlewares/error");

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    errorHandler(res, 400, "Invalid Request Only Post request allowed");

  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return errorHandler(res, 400, "Please enter all fields");

  await connectDB();

  let user = await User.findOne({ email });

  if (user) errorHandler(res, 400, "User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = generateToken(user?._id);

  cookieSetter(res, token, true);

  res.status(201).json({
    success: true,
    message: "Registered succesfully",
  });
});

export default handler;
