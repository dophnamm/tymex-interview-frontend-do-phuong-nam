import * as React from "react";
const ClearIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.429a8.571 8.571 0 1 0 0 17.142A8.571 8.571 0 0 0 12 3.43m2.779 10.357a.714.714 0 0 1-.508 1.218.7.7 0 0 1-.485-.225l-1.768-1.786-1.768 1.786a.714.714 0 1 1-1.01-1.011L11.024 12l-1.786-1.768a.715.715 0 1 1 1.011-1.01l1.768 1.785 1.768-1.786a.715.715 0 1 1 1.01 1.011L13.011 12z"
      fill="#FBC625"
    />
  </svg>
);
export default ClearIcon;
