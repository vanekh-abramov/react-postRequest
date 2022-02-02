import React from "react";


const Counter = ({count, setCounts}) => {

  const increment = () => {
    if (count < 95) {
      setCounts(count + 5);
    } else {
      setCounts(count === 5);
    }
  };

  const decrement = () => {
    if (count > 10) {
      setCounts(count - 5);
    } else {
      setCounts(count === false);
    }
  };

  return (
    <>
      <div>Показываеть {count} постов</div>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </>
  );
};

export default Counter;