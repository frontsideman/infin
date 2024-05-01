'use client';

export function ButtonLink({ link, text, className }) {
  return (
    <a
      className={`block rounded-full py-4 px-8  text-center uppercase custom-cursor shadow-sm custom-cursor ${className}`}
      href={link}
    >
      {text}
    </a>
  );
}
