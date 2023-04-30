import React, { use } from "react";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";

const Progress = ({ ques, uid }) => {
  const [donearray, setDonearray] = useState([]);
  const [easy, setEasy] = useState(Number(0));
  const [medium, setMedium] = useState(Number(0));
  const [hard, setHard] = useState(Number(0));

  //   useEffect(() => {
  //     if (ques) {
  //       const docRef = doc(db, "users", auth.currentUser.uid);
  //       getDoc(docRef)
  //         .then((d) => d.data())
  //         .then((d) => d.solvedQuestion)
  //         .then((d) => setDonearray(d));
  //     }
  //   }, [current_user]);

  return <div>{current_user ? <>{}</> : <></>}</div>;
};

Progress.getInitialProps = async (context) => {
  const res = await fetch("https://questions-ih30.onrender.com/");
  const ques = await res.json();
  const docRef = doc(db, "users", uid);

  return {
    ques,
  };
};

export default Progress;
