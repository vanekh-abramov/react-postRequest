import styles from "./todosStyles.module.scss";
import DataFetching from "./dataFetching";
import Counter from "./Counter";
import { useState } from "react";

const PostRequest = () => {

  const [count, setCounts] = useState(5);

  return (
    <>
      <section className={styles.container}>
        <h1>Post list</h1>
        <Counter count={count} setCounts={setCounts}/>
        <DataFetching count={count} />
      </section>
    </>
  );
};

export default PostRequest;
