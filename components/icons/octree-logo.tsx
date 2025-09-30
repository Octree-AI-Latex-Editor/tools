export function OctreeLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="64" height="64" rx="16" fill="url(#paint0_linear_111_164)" />
      <path
        d="M20.3125 12.75C18.4132 12.75 16.875 14.29 16.875 16.1875V47.8125C16.875 49.71 18.415 51.25 20.3125 51.25H43.6875C45.585 51.25 47.125 49.71 47.125 47.8125V33.375C47.125 31.5516 46.4007 29.803 45.1114 28.5136C43.822 27.2243 42.0734 26.5 40.25 26.5H36.8125C35.9008 26.5 35.0265 26.1378 34.3818 25.4932C33.7372 24.8485 33.375 23.9742 33.375 23.0625V19.625C33.375 17.8016 32.6507 16.053 31.3614 14.7636C30.072 13.4743 28.3234 12.75 26.5 12.75H20.3125Z"
        fill="url(#paint1_linear_111_164)"
      />
      <path
        d="M33.7802 13.3293C35.2954 15.0764 36.1282 17.3123 36.125 19.625V23.0625C36.125 23.442 36.433 23.75 36.8125 23.75H40.25C42.5627 23.7468 44.7986 24.5796 46.5457 26.0948C45.7391 23.0271 44.1321 20.2287 41.8892 17.9858C39.6463 15.7429 36.8479 14.1359 33.7802 13.3293Z"
        fill="#A7C9FF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_111_164"
          x1="32"
          y1="0"
          x2="32"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6A9FFF" />
          <stop offset="1" stopColor="#478EFF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_111_164"
          x1="32"
          y1="12.75"
          x2="32"
          y2="51.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#BFDBFE" />
        </linearGradient>
      </defs>
    </svg>
  );
} 