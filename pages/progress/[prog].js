import React, { use } from "react";
import { app } from "../../firebase";
import { getAuth } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../firebase";
import { useState, useEffect } from "react";

export const getServerSideProps = async (context) => {
  let easy = 0;
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
    }
  });

  return {
    props: {
      easy1: easy,
    },
  };
};

const Progress = ({ easy1 }) => {
  const auth = getAuth(app);

  const [donearray, setDonearray] = useState([]);
  const [easy, setEasy] = useState(Number(0));
  const [medium, setMedium] = useState(Number(0));
  const [hard, setHard] = useState(Number(0));

  return <div>{auth.currentUser ? <>{easy1}</> : <></>}</div>;
};

export default Progress;
