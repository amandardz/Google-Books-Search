import React from 'react';

function Button({ type = "default", children, onClick, className }) {
  return (
    <button onClick={onClick} className={["btn btn-sm", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default Button;