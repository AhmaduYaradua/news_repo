import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="container mx-auto flex p-2 justify-between border-b-2 items-center">
      <h2 className="text-3xl font-bold text-red-500">Blogmate</h2>
      <ul className="flex gap-4">
        <li>
          <Link className="hover:text-red-500" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href={"/news"}>
            News
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href={"/contact-us"}>
            Get in touch
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href={"/about"}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
