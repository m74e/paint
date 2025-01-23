import * as React from "react";

const SvgComponent = ({ opacity = 0.6, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={229}
    height={159}
    fill="none"
    style={{ opacity }} // Apply dynamic opacity
    {...props}
  >
    <path
      stroke="#F6F5FA"
      strokeWidth={0.764}
      d="M108.132 10.707c11.356 4.164-6.929 40.642 48.098 40.642 29.059 0 22.797 29.805 40.332 31.92M139.696.993c11.357 4.163-6.929 40.642 48.099 40.642 29.059 0 22.796 29.804 40.332 31.919M58.029 36.23c18.432-2.643 56.169-2.647 48.599 12.932-12.525 25.78 16.966 51.106 95.696 56.113"
    />
    <path
      stroke="#F6F5FA"
      strokeWidth={0.764}
      d="M23.96 45.838c22.783-3.26 69.43-3.265 60.074 15.961-15.484 31.815 20.971 63.071 118.29 69.249"
    />
    <path
      stroke="#F6F5FA"
      strokeWidth={0.764}
      d="M.411 61.914c25.792-3.693 78.598-3.698 68.006 18.074-17.527 36.028 23.74 71.423 133.907 78.419"
    />
  </svg>
);

export default SvgComponent;
