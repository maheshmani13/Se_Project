import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps() {
  const res = await fetch("https://dsa-v3sn.onrender.com");
  const ques = await res.json();

  return {
    props: {
      ques,
    },
    revalidate: 30,
  };
}

const Post = ({ ques }) => {
  let quess = [];
  const router = useRouter();
  const { query } = router.query;
  quess = ques?.filter((q) => {
    return q.Topic == query;
  });
  console.log(quess);

  return (
    <div className="mx-12">
      <div className="-mx-4 sm:-mx-8 px-8 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="">
                <th className="px-32 ml-10 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Problem Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Topic
                </th>

                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Difficulty Level
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {quess?.map((question) => (
                <tr key={question.id}>
                  <td className=" px-10 py-5 border-b border-gray-200 bg-white text-sm">
                    <Link href={`ques/${question.Problem}`}>
                      <div className="flex items-center">
                        <div className="ml-5">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {question.Problem}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {question.Topic}
                    </p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap ml-6">
                      Medium
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Done</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Post;
