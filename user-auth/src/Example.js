import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count % 3 === 0 && count !== 0)
      console.log(`Clapped on the count of ${count}`);
  });

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '30px' }}>You clicked {count} times</div>

      <div style={{ display: 'flex', flexDirection: 'row', margin: '20px' }}>
        <button
          style={{
            width: '30px',
            height: '30px',
            margin: '5px 2rem 5px 0',
            backgroundColor: 'white',
            border: '1px solid black',
          }}
          onClick={plus}
        >
          +
        </button>
        <button
          style={{
            width: '30px',
            height: '30px',
            margin: '5px',
            backgroundColor: 'white',
            border: '1px solid black',
          }}
          onClick={minus}
        >
          -
        </button>
      </div>
    </div>
  );
}
