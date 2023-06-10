import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

interface NavLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className, ...props }: NavLinkProps) {
  const refNavLink = useRef<HTMLAnchorElement>(null);
  const { asPath } = useRouter();

  useEffect(() => {
    if (asPath === href) {
      const el = refNavLink.current;
      el?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, [asPath, href]);

  return (
    <Link
      ref={refNavLink}
      {...props}
      href={href}
      className={clsx(className, asPath === href && 'btn--link--active')}
    >
      {children}
    </Link>
  );
}
