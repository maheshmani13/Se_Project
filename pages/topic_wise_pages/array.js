import React, { useState } from "react";
import { useEffect } from "react";

export async function getStaticProps() {
  const res = await fetch("https://dsa-v3sn.onrender.com/Array");
  const ques = await res.json();
  return {
    props: {
      ques,
    },
    revalidate: 30,
  };
}

const Array = ({ ques }) => {
  // const [ques, setques] = useState([]);
  // useEffect(() => {
  //   get("http://dsa-v3sn.onrender.com/Array")
  //     .then((response) => response.json())
  //     .then((response) => setques(response));
  // }, []);

  return (
    <>
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          {ques.map((question) => {
            return (
              <div
                key={question.Problem}
                class="py-8 flex flex-wrap md:flex-nowrap"
              >
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">
                    Difficulty
                  </span>
                  <span class="mt-1 text-gray-500 text-sm">
                    {question.Difficulty}
                  </span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    {question.Problem}
                  </h2>
                  <p class="leading-relaxed">{question.Topic}</p>
                  <a
                    href={`${question.URL}`}
                    class="text-indigo-500 inline-flex items-center mt-4"
                  >
                    Solve it Now!
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Array;
