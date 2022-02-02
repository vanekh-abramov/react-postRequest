import React from "react";
import style from "./todosStyles.module.scss";

const Post = ({ title, body, id }) => {
  return (
    <div className={style.postWrapper}>
      <h2 className={style.postTitle}>
        {title}, {id}
      </h2>
      <p className={style.postBody}>{body}</p>
    </div>
  );
};

export default Post;
