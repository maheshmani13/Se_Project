import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const flex = "";
  return (
    <div className="shadow-sm h-20 text-red-200 bg-purple-200 flex justify-between items-center">
      <Link href="#">
        <div className="ml-5">
          <img src="/logo.png" width={150} />
        </div>
      </Link>
      <div className="flex gap-10 ">
        <Link href="#">
          <p className="font-semibold text-xl text-red-400 ">Home</p>
        </Link>
        <Link href="#">
          <p className="font-semibold text-xl text-red-400 ">Contact</p>
        </Link>
        <p className="font-semibold text-xl text-red-400 ">Questions</p>
        <p className="font-semibold text-xl text-red-400 ">Xyz</p>
      </div>

      <div className="flex gap-15 p-10 mt-2">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Login
          </span>
        </button>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            SingUp
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
