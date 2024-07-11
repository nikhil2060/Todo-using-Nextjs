import { User } from "@/models/user";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

export const cookieSetter = (res, token, set) => {
  res.setHeader(
    "Set-Cookie",
    serialize("todo-token", set ? token : "", {
      maxAge: set ? 15 * 24 * 60 * 60 : 0,
      sameSite: "none",
      secure: true,
      httpOnly: true,
      path: "/",
    })
  );
};

export const generateToken = (_id) => {
  const token = jwt.sign(
    {
      _id,
    },
    process.env.JWT_SECRET
  );

  return token;
};

export const checkAuth = async (req) => {
  const cookie = req.headers.cookie;
  if (!cookie) return null;

  const token = cookie.split("=")[1];

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return await User.findById(decoded._id);
};
