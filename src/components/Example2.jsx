import React from 'react';

function Example2() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You Clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click!</button>
    </div>
  );
}

export default Example2;
