import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { app } from "../firebase";
import { handlesignout } from "../signout";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const signingout = async () => {
    await handlesignout();
    setlogged_in(false);

    router.push("/");
  };

  const [logged_in, setlogged_in] = useState(false);
  const auth = getAuth(app);

  useEffect(() => {
    if (auth.currentUser) {
      setlogged_in(true);
    }
  }, [auth.currentUser]);

  const flex = "";
  return (
    <div className="shadow-sm h-20 text-red-200 bg-orange-200 flex justify-between items-center">
      <Link href="/">
        <div className="ml-5">
          <img src="/logo.png" width={150} alt="logo" />
        </div>
      </Link>
      <div className="flex gap-10 ">
        <Link href="/">
          <p className="font-semibold text-xl text-red-400 hover:text-red-800">
            Home
          </p>
        </Link>
        <Link href="/contest">
          <p className="font-semibold text-xl text-red-400 hover:text-red-800 ">
            Contests
          </p>
        </Link>
        <Link href={"/about"}>
          <p className="font-semibold text-xl text-red-400 hover:text-red-800">
            About
          </p>
        </Link>
      </div>

      <div className="flex gap-15 p-10 mt-2">
        {!logged_in ? (
          <>
            <Link href="/login">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
              </button>
            </Link>
            <Link href="/signup">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  SignUp
                </span>
              </button>
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={signingout}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sign Out
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
