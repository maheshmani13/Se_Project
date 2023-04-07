import React from "react";
import Link from "next/link";

const Navbar = () => {
  const flex = "";
  return (
    <div className="h-16 text-red-200 bg-slate-500 flex justify-between items-center">
      <div>Logo</div>
      <div className="flex gap-10 pl-20 ">
        <a href={`/`}>
          <p>Home</p>
        </a>
        <a>
          <p>Contact</p>
        </a>
        <p>Questions</p>
        <p>Xyz</p>
      </div>

      <div className="flex gap-15 p-10">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
