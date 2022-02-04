import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";


const DataFetching = ({count}) => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const element = post.map(({ id, title, body }) => {
      return (id < count + 1) ? <Post key={id} id={id} title={title} body={body} /> : false
  })

  return (
    <>
      {element}
    </>
  );
};

export default DataFetching;
