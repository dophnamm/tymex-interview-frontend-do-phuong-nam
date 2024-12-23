import * as React from "react";
const ETHIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={14}
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M3.999.538 3.91.833v8.543l.09.086 3.999-2.344z" fill="#C1CCF7" />
      <path d="M3.999.538 0 7.118l3.999 2.344z" fill="#fff" />
      <path d="m3.999 10.213-.05.06v3.043l.05.143L8 7.87z" fill="#C1CCF7" />
      <path d="M3.999 13.459v-3.246L0 7.87z" fill="#fff" />
      <path d="m3.999 9.462 3.999-2.344-4-1.802z" fill="#8198EE" />
      <path d="m0 7.118 3.999 2.344V5.316z" fill="#C1CCF7" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .538h8v12.923H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ETHIcon;
