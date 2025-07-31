import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="flex justify-between p-8">
        <h1>Главная</h1>
        <nav className="flex gap-8">
          <Link href="/pages">Страницы</Link>
          <Link href="/price-plans">Тарифные Планы</Link>
          <Link href="/products">Продукты</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center py-10">
        <h1>Тестовое задание для компании ITACWT</h1>
        <p>Крутое тестовое задание, которое я надеюсь засчитают и всё будет отлично</p>
      </main>

      <hr />

      <footer className="p-5">
        <h3>@R1tazzz</h3>
      </footer>
    </>
  );
}
