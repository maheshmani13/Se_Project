import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const res = await fetch("https://dsa-v3sn.onrender.com/topic");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
    revalidate: 30,
  };
}

export default function Home({ articles }) {
  return (
    <div className="flex flex-wrap justify-around gap-10 p-10">
      {articles?.map((article) => (
        <div
          key={article.topic}
          className="w-72 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-orange-100 dark:border-gray-700"
        >
          <Link href={`/${article.topic}`}>
            <img
              className="rounded-t-lg object-scale-down"
              src={`/topic_pic/graph.png`}
              alt=""
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {article.topic}
              </h5>

              <p className="mb-3 font-normal text-gray-700">
                Problems : {article.numberOfQuestions}
              </p>
              <div className="flex justify-end">
                <button
                  type="button"
                  class="inline-block bg-red-300 rounded-full border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 "
                  data-te-ripple-init
                >
                  View
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
