import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Тестовое задание для компании <span className="text-blue-500">ITACWT</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl">
          Платформа для отображения массивов данных в виде таблицы с фильтрацией и возможностью
          редактирования.
        </p>
      </main>
      <Footer />
    </>
  );
}
