import { LogoutBtn } from "@/components/clients";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link href={"/"}>
          <h2>Next-Todo?.</h2>
        </Link>
      </div>
      <article>
        <Link href={"/"}>Home</Link>
        <Link href={"/profile"}>Profile</Link>
        <LogoutBtn />
      </article>
    </div>
  );
};

export default Header;
