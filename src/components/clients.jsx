"use client";

import React from "react";

export const LogoutBtn = () => {
  const logoutHandler = () => {
    alert("Logged out");
  };
  return <button onClick={logoutHandler}>Logout</button>;
};
