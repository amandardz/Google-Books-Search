import React from 'react';

function Button({ type = "default", children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`].join(" ")}>
      {children}
    </button>
  );
}

export default Button;