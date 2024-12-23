import * as React from "react";

const ActiveIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={12} height={12} rx={6} fill="#17161A" />
    <g clipPath="url(#activeA)">
      <path
        d="m9.667 6-.814-.93.114-1.23-1.204-.273-.63-1.067L6 2.987 4.867 2.5l-.63 1.063-1.204.27.114 1.234L2.333 6l.814.93-.114 1.233 1.204.274.63 1.063L6 9.01l1.133.487.63-1.064 1.204-.273-.114-1.23zm-4.54 1.337-.794-.8a.33.33 0 0 1 0-.47l.024-.024c.13-.13.343-.13.473 0l.537.54 1.716-1.72c.13-.13.344-.13.474 0l.023.024c.13.13.13.34 0 .47l-1.973 1.98a.344.344 0 0 1-.48 0"
        fill="url(#activeB)"
      />
      <path
        d="m5.127 7.337-.794-.8a.33.33 0 0 1 0-.47l.024-.024c.13-.13.343-.13.473 0l.537.54 1.716-1.72c.13-.13.344-.13.474 0l.023.024c.13.13.13.34 0 .47l-1.973 1.98a.344.344 0 0 1-.48 0"
        fill="#F5F8FA"
      />
    </g>
    <defs>
      <linearGradient
        id="activeB"
        x1={2.333}
        y1={2.5}
        x2={9.683}
        y2={2.517}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#49DD81" />
        <stop offset={1} stopColor="#22B4C6" />
      </linearGradient>
      <clipPath id="activeA">
        <rect x={2} y={2} width={8} height={8} rx={4} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export default ActiveIcon;
