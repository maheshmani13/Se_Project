import React from "react";

const Card = ({ art }) => {
  console.log(art);
  return (
    <div>
      {art?.map((article) => (
        <div key={article.topic}>Mahesh</div>
      ))}
    </div>
  );
};

export default Card;
