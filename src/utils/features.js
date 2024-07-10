import { serialize } from "cookie";
import jwt from "jsonwebtoken";

const JWT_SECRET = "asdasdkjsafkjnaskjsaknkajnanlnasdmnaskdnkajsndk";

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
    JWT_SECRET
  );

  return token;
};
