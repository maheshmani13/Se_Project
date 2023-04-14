import React from "react";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { query } = router.query;
  console.log(query);

  return <p>{query}</p>;
};

export default Post;
