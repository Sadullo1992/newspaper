import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  target?: string;
}

export default function Button({
  className,
  children,
  type,
  disabled,
  href,
  target,
  ...props
}: ButtonProps) {
  const cls = clsx(`btn`, className);

  return href ? (
    <Link href={href} className={cls} target={target}>
      {children}
    </Link>
  ) : (
    <button {...props} type={type} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
