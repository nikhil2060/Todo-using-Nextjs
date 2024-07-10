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

export const TodoButton = ({ id, completed }) => {
  // const router = useRouter();
  const deleteHandler = async (id) => {
    // try {
    //   const res = await fetch(`/api/task/${id}`, {
    //     method: "DELETE",
    //   });
    //   const data = await res.json();
    //   if (!data.success) return toast.error(data.message);
    //   toast.success(data.message);
    //   router.refresh();
    // } catch (error) {
    //   return toast.error(error);
    // }
  };

  // const updateHandler = async (id) => {
  //   try {
  //     const res = await fetch(`/api/task/${id}`, {
  //       method: "PUT",
  //     });
  //     const data = await res.json();
  //     if (!data.success) return toast.error(data.message);
  //     toast.success(data.message);
  //     router.refresh();
  //   } catch (error) {
  //     return toast.error(error);
  //   }
  // };

  return (
    <>
      <input type="checkbox" checked={completed} />
      <button className="btn" onClick={() => deleteHandler(id)}>
        Delete
      </button>
    </>
  );
};
