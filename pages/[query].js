import React from "react";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { query } = router.query;

  return <p></p>;
};

export default Post;
