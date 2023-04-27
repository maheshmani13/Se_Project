import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps() {
  const res = await fetch("https://dsa-v3sn.onrender.com/");
  const ques1 = await res.json();

  return {
    props: {
      ques1,
    },
    revalidate: 30,
  };
}

const Question = ({ ques1 }) => {
  const router = useRouter();
  const { ques } = router.query;
  //   console.log(ques1);
  console.log(ques);

  ques1 = ques1?.filter((q) => q.Problem.trim() == ques);
  console.log(ques1);

  return (
    <>
      {ques1?.map((q) => (
        <div
          key={q.id}
          className="flex mt-20 items-center p-10 w-full h-full bg-white"
        >
          <div className="border-t border-b pt-16 grid grid-cols-2 gap-8">
            <div className="flex flex-col justify-start">
              <div className="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt="nike shoes"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                <p className="capitalize text-2xl font-extrabold text-black">
                  {q.Problem}
                </p>
                <p className="text-3xl">{q.Topic}</p>
                <p className="">Difficulty : {q.Difficulty}</p>
                <p className="text-lg text-gray-500	">{q.Description}</p>
                <div className="flex items-center gap-4 my-6 cursor-pointer ">
                  <a href={q.URL} target="_blank">
                    <button
                      type="button"
                      className="inline-block bg-red-300 rounded-full px-6 pb-[6px] pt-2 text-sm font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100  focus:ring-0 active:border-primary-accent-200 "
                      data-te-ripple-init
                    >
                      Go to Question
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Question;
