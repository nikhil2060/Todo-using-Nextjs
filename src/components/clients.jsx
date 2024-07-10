"use client";

import Link from "next/link";
import React, { createContext, useContext, useState } from "react";

const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={(user, setUser)}>{children}</Context.Provider>
  );
};

export const LogoutBtn = () => {
  const { user } = useContext(Context);

  const logoutHandler = () => {
    alert("Logged out");
  };

  return user?.id ? (
    <button onClick={logoutHandler}>Logout</button>
  ) : (
    <Link href={"/login"}>Login</Link>
  );
};
