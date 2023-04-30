import React, { use } from "react";
import { app } from "../../firebase";
import { getAuth } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../firebase";
import { useState, useEffect } from "react";

export const getServerSideProps = async (context) => {
  let easy = 0,
    hard = 0,
    medium = 0;
  const res = await fetch("https://questions-ih30.onrender.com/");
  const ques = await res.json();
  console.log("done");
  console.log(context.query.prog);
  const docRef = doc(db, "users", context.query.prog);
  const doc1 = await getDoc(docRef);
  const data = await doc1.data();
  const solvedarray = await data.solvedQuestion;
  ques.map((q) => {
    if (solvedarray?.includes(q.id)) {
      if (q.Difficulty == "Easy") {
        easy = easy + 1;
      }
      if (q.Difficulty == "Medium") {
        medium = medium + 1;
      }
      if (q.Difficulty == "Hard") {
        hard = hard + 1;
      }
    }
  });

  return {
    props: {
      easy1: easy,
      medium1: medium,
      hard1: hard,
    },
  };
};

const Progress = ({ easy1, medium1, hard1 }) => {
  const auth = getAuth(app);

  const [donearray, setDonearray] = useState([]);
  const [easy, setEasy] = useState(Number(0));
  const [medium, setMedium] = useState(Number(0));
  const [hard, setHard] = useState(Number(0));

  return (
    <div>
      {auth.currentUser ? (
        <>
          <div className="container my-10  mx-5">
            <div className="flex flex-col gap-10">
              <div className="text-3xl px-0">On the Basis Of Difficulty</div>
              <div className="mb-32 text-gray-800 text-center">
                <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">
                  <div className="mb-12 md:mb-0">
                    <h2 className="text-3xl font-bold display-5 text-red-300 mb-4">
                      {easy1}
                    </h2>
                    <h5 className="text-2xl font-medium mb-4">Easy</h5>
                    <p className="text-gray-500  text-xl">Total : </p>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <h2 className="text-3xl font-bold display-5 text-red-300 mb-4">
                      {medium1}
                    </h2>
                    <h5 className="text-2xl font-medium mb-4">Medium</h5>
                    <p className="text-gray-500 text-xl">Total : </p>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <h2 className="text-3xl font-bold display-5 text-red-300 mb-4">
                      {hard1}
                    </h2>
                    <h5 className="text-2xl font-medium mb-4">Hard</h5>
                    <p className="text-gray-500  text-xl">Total : </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="text-3xl px-0">On the Basis Of Topic</div>
              <div className="mb-32 text-gray-800 text-center">
                <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">
                  <div className="mb-12 md:mb-0">
                    <h2 className="text-3xl font-bold display-5 text-red-300 mb-4">
                      {easy1}
                    </h2>
                    <h5 className="text-2xl font-medium mb-4">Easy</h5>
                    <p className="text-gray-500  text-xl">Total : </p>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <h2 className="text-3xl font-bold display-5 text-red-300 mb-4">
                      {medium1}
                    </h2>
                    <h5 className="text-2xl font-medium mb-4">Medium</h5>
                    <p className="text-gray-500 text-xl">Total : </p>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <h2 className="text-3xl font-bold display-5 text-red-300 mb-4">
                      {hard1}
                    </h2>
                    <h5 className="text-2xl font-medium mb-4">Hard</h5>
                    <p className="text-gray-500  text-xl">Total : </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Progress;
