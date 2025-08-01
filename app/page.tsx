import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center py-10">
        <h1>Тестовое задание для компании ITACWT</h1>
        <p>
          Платформа для отображения массивов данных в виде таблицы, с фильтрацией и возможностью
          редактирования
        </p>
      </main>
      <Footer />
    </>
  );
}
