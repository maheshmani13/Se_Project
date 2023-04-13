import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import Main_topic_body from "./component/main_topic_body";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <Main_topic_body
        topicitem={{ topic: "array", no_of_questions: "98" }}
      ></Main_topic_body>
      <Main_topic_body
        topicitem={{ topic: "string", no_of_questions: "98" }}
      ></Main_topic_body>
      <Main_topic_body
        topicitem={{ topic: "dp", no_of_questions: "98" }}
      ></Main_topic_body>
      <Main_topic_body
        topicitem={{ topic: "graph", no_of_questions: "98" }}
      ></Main_topic_body>
    </div>
  );
}
