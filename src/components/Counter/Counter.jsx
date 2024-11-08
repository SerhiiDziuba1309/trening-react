import React, { useState } from 'react';
import s from './Counter.module.css';
const Counter = () => {
  const [count, setCount] = useState(0);
  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  return (
    <div>
      <h1 className={s.title}> COUNTER : {count}</h1>
      <button className={s.btn} onClick={plus}>
        PLUS
      </button>
      <button className={s.btn} onClick={minus}>
        MINUS
      </button>
    </div>
  );
};

export default Counter;
