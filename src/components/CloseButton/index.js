import * as React from "react";

function CloseButton({ width, color, onClick } = {}) {
  return (
    <button onClick={onClick} type="button">
      <svg
        width={width || 24}
        height={width || 24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18M6 6l12 12"
          stroke={color || "#CCC"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default CloseButton;
