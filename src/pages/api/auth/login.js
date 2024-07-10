import { User } from "@/models/user";
import { connectDB } from "@/utils/database";
import { cookieSetter, generateToken } from "@/utils/features";
import bcrypt from "bcrypt";

const { asyncError, errorHandler } = require("@/middlewares/error");

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    errorHandler(res, 400, "Invalid Request Only Post request allowed");

  const { email, password } = req.body;

  if (!email || !password)
    return errorHandler(res, 400, "Please enter all fields");

  await connectDB();

  const user = await User.findOne({ email }).select("+password");

  if (!user) errorHandler(res, 400, "Invalid Email or Password");

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) errorHandler(res, 400, "Incorrect Password");

  const token = generateToken(user?._id);

  cookieSetter(res, token, true);

  res.status(200).json({
    success: true,
    message: `Welcome back ${user.name}`,
  });
});

export default handler;
