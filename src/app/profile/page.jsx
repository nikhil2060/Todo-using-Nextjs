// ProfilePage.jsx
"use client";

import React, { useContext } from "react";
import { Context } from "@/components/clients";
import { redirect } from "next/navigation";
const ProfilePage = () => {
  const { user } = useContext(Context);

  if (!user._id) return redirect("/login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
        <p className="text-lg text-gray-700">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
