import * as React from "react";

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.268 8.707a1 1 0 0 0-1.414 0l-4.086 4.086a1 1 0 0 1-1.414 0L7.268 8.707a1 1 0 0 0-1.414 0l-.147.147a1 1 0 0 0 0 1.414l5.647 5.646a1 1 0 0 0 1.414 0l5.647-5.646a1 1 0 0 0 0-1.414z"
      fill="#fff"
    />
  </svg>
);

export default ChevronDownIcon;
