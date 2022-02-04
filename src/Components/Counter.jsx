import React from "react";


const Counter = ({count, setCounts}) => {

  const increment = () => {
    setCounts((prevCounter)=> {
      if(prevCounter < 100) {
        return prevCounter + 5
      } else {
        return prevCounter
      }
    })
  };

  const decrement = () => {
    setCounts((prevCounter)=>{
      if (prevCounter > 5) {
        return prevCounter - 5
      } else {
        return prevCounter
      }
    })
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