import React from 'react';

function Example3() {
  const [state, setState] = React.useState({ count: 0 });
  return (
    <div>
      <p>You Clicked {state.count} times.</p>
      <button onClick={() => setState({ count: state.count + 1 })}>Click!</button>
    </div>
  );
}

export default Example3;
