import * as React from "react";
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.583 16.667a7.083 7.083 0 1 1 0-14.167 7.083 7.083 0 0 1 0 14.167m0-12.75a5.667 5.667 0 1 0 0 11.333 5.667 5.667 0 0 0 0-11.333"
      fill="#89888B"
    />
    <path
      d="M16.434 17.75a.48.48 0 0 1-.345-.143l.177-.177-.177.176zm0 0a.48.48 0 0 0 .342-.147.483.483 0 0 0-.002-.682m-.341.83.342-.829m-.001 0-2.429-2.439zm-3.111-1.75.005.004.169-.185-.177.177z"
      fill="#89888B"
      stroke="#89888B"
      strokeWidth={0.5}
    />
  </svg>
);
export default SearchIcon;
