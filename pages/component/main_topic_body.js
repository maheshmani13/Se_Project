import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

export const Main_topic_body = () => {
  const [topics, settopics] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/topic")
      .then((response) => response.json())
      .then((response) => {
        settopics(response);
      });
  }, []);
  console.groupCollapsed(topics);
  return (
    <div className="flex flex-wrap">
      {topics.map((topicitem) => {
        return (
          <div className="m-10">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image src="" width={100} height={100} alt={topicitem.topic} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {topicitem.topic}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {topicitem.no_of_questions}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
