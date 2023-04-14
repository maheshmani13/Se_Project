import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import Card from "./card";

const inter = Inter({ subsets: ["latin"] });

export async function getServerProps() {
  const res = await fetch("https://dsa-v3sn.onrender.com/topic");
  const articles = await res.json();
  console.log(articles);

  return {
    props: {
      articles,
    },
    revalidate: 30,
  };
}

export default function Home({ articles }) {
  return (
    <>
      <Card art={articles}></Card>
    </>
  );
}
