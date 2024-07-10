import { LogoutBtn } from "@/components/clients";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h2>Todo.</h2>
      </div>
      <article>
        <Link href={"/"}>Home</Link>
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/login"}>Login</Link>
        <LogoutBtn />
      </article>
    </div>
  );
};

export default Header;
