import * as React from "react";

const MessagesIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M18.095 4H5.905A1.905 1.905 0 0 0 4 5.905v9.143c0 1.052.853 1.904 1.905 1.904H7.81v2.286a.762.762 0 0 0 1.299.537l2.822-2.823h6.164A1.905 1.905 0 0 0 20 15.048V5.905A1.905 1.905 0 0 0 18.095 4m-4.571 8.952H8.57a.762.762 0 1 1 0-1.523h4.953a.762.762 0 1 1 0 1.523m1.905-3.428H8.57A.762.762 0 0 1 8.57 8h6.858a.762.762 0 1 1 0 1.524"
      fill="#fff"
    />
  </svg>
);
export default MessagesIcon;
