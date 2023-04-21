import "@/styles/globals.css";
import Navbar from "./navbar";
import { getAuth, updateCurrentUser } from "firebase/auth";
import { app } from "../firebase";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}
