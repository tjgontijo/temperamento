'use client';

export function PatternBackground() {
  return (
    <svg
      className="absolute inset-0 opacity-10 pointer-events-none w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <pattern
        id="pattern"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
        />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
    </svg>
  );
}
