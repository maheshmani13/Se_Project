import React from "react";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://kontests.net/api/v1/all");
  const contests = await res.json();
  console.log(contests);

  return {
    props: {
      contests,
    },
    revalidate: 30,
  };
}

const Contest = ({ contests }) => {
  contests = contests?.filter((q) => {
    return q.name.length < 45;
  });
  return (
    <div className="flex flex-wrap gap-10 px-10 justify-center">
      {contests?.map((contest) => (
        <div
          key={contest.name}
          className="w-72 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-orange-100 dark:border-gray-700"
        >
          <div className="p-5">
            <p className="mb-2 text-2xl font-bold tracking-tight h-20 text-gray-900 ">
              {contest.name}
            </p>

            <p className="mb-3 font-normal text-gray-700">
              Start Time: {contest.start_time}
            </p>
            <p className="mb-3 font-normal text-gray-700">
              End Time: {contest.end_time}
            </p>
            <div className="flex items-center justify-between">
              <a href={contest.url} target="_blank">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-block bg-red-300 rounded-full border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 "
                    data-te-ripple-init
                  >
                    Get Reminder
                  </button>
                </div>
              </a>
              <div className="flex justify-start">
                <button
                  type="button"
                  className="inline-block bg-red-300 rounded-full border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 "
                  data-te-ripple-init
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contest;
