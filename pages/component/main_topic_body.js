import React from "react";

import Link from "next/link";

const Main_topic_body = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-wrap">
        <div className="m-10">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="h-32 w-64">
              <img
                className="rounded-t-lg object-fit h-32 w-64"
                src={`/topic_pic/array.png`}
                alt="array"
              />
            </div>
            <div className="p-5">
              <Link href={`/topic_wise_pages/array`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  array
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                98
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* })} */}
      </div>

      <div className="flex flex-wrap">
        <div className="m-10">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="h-32 w-64">
              <img
                className="rounded-t-lg object-fit h-32 w-64"
                src={`/topic_pic/string.png`}
                alt="string"
              />
            </div>
            <div className="p-5">
              <Link href={`/topic_wise_pages/string`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  string
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                98
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* })} */}
      </div>

      <div className="flex flex-wrap">
        <div className="m-10">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="h-32 w-64">
              <img
                className="rounded-t-lg object-fit h-32 w-64"
                src={`/topic_pic/dp.png`}
                alt="dp"
              />
            </div>
            <div className="p-5">
              <Link href={`/topic_wise_pages/dp`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  dp
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                98
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* })} */}
      </div>

      <div className="flex flex-wrap">
        <div className="m-10">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="h-32 w-64">
              <img
                className="rounded-t-lg object-fit h-32 w-64"
                src={`/topic_pic/graph.png`}
                alt="graph"
              />
            </div>
            <div className="p-5">
              <Link href={`/topic_wise_pages/graph`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  graph
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                98
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* })} */}
      </div>
    </div>
  );
};

export default Main_topic_body;
