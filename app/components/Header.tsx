'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import logo from '@/public/logo.png';

const Header = () => {
  const pathname = usePathname();

  const links = [
    { href: '/pages', label: 'Страницы' },
    { href: '/price-plans', label: 'Тарифные Планы' },
    { href: '/products', label: 'Продукты' },
  ];

  return (
    <header className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mt-5 mb-2 mx-4 md:mx-10">
      <Link href="/" className="shrink-0">
        <Image src={logo} alt="Логотип" width={50} height={50} />
      </Link>
      <nav className="flex flex-wrap justify-center md:justify-end mt-2 md:mt-0 gap-6 md:gap-12 text-base">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              'hover:text-blue-500 transition',
              pathname === link.href &&
                'text-blue-500 underline decoration-[1.5px] underline-offset-[5px]',
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
