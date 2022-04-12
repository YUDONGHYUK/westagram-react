import React, { useState } from "react";
import AddItemForm from "../AddItemForm/AddItemForm";
import FeedContent from "../FeedContent/FeedContent";
import FeedIconBar from "../FeedIconBar/FeedIconBar";
import FeedLikeBar from "../FeedLikeBar/FeedLikeBar";
import "./Article.scss";

const Article = (props) => {
  const [comments, setComments] = useState([
    { id: 0, name: "gel_fos", text: "덕순이 너무 귀여워요~" },
  ]);

  const handleAdd = (text) => {
    setComments((prev) => [...prev, { id: Date.now(), name: "gel_fos", text }]);
  };

  return (
    <article className="main-article">
      <img src="images/덕순1.jpg" alt="" className="article-img" />
      <FeedIconBar />
      <FeedLikeBar />
      <FeedContent comments={comments} />
      <AddItemForm onAdd={handleAdd} />
    </article>
  );
};

export default Article;
