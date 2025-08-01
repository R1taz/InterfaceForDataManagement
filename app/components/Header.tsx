import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between p-8">
      <Link href="/">Главная</Link>
      <nav className="flex gap-8">
        <Link href="/pages">Страницы</Link>
        <Link href="/price-plans">Тарифные Планы</Link>
        <Link href="/products">Продукты</Link>
      </nav>
    </header>
  );
};

export default Header;
