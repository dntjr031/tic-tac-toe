import React from 'react';

function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('componentDidMount');
  }, []);

  React.useEffect(() => {
    console.log('componentDidMount & componentDidUpdate', count);
  }, [count]);
  return (
    <div>
      <p>You Clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click!</button>
    </div>
  );
}

export default Example5;
