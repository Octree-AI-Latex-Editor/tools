import * as React from 'react';

export function OctreeLogo({ className = 'w-6 h-6' }: { className?: string }) {
  const id = React.useId();
  const tileId = `${id}-tile`;
  const ringId = `${id}-ring`;

  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="96" height="96" rx="22" fill={`url(#${tileId})`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 20 L61 20 L76 35 L76 61 L61 76 L35 76 L20 61 L20 35 Z M41.5 34.4 L34.4 41.5 L34.4 54.5 L41.5 61.6 L54.5 61.6 L61.6 54.5 L61.6 41.5 L54.5 34.4 Z"
        fill={`url(#${ringId})`}
      />
      <defs>
        <linearGradient
          id={tileId}
          x1="48"
          y1="0"
          x2="48"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4485FE" />
          <stop offset="1" stopColor="#0C50D0" />
        </linearGradient>
        <linearGradient
          id={ringId}
          x1="48"
          y1="20"
          x2="48"
          y2="76"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#ABC8FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
