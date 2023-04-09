import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import Main_topic_body from "./component/main_topic_body";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Main_topic_body></Main_topic_body>

      <p>mahesh</p>
    </>
  );
}
