import { useTheme } from '../contexts/ThemeContext';

const Content = () => {
  const { theme } = useTheme();

  return (
    <main className={`content ${theme}`}>
      <h2>Ласкаво просимо на мій сайт!</h2>
      <p>Це демонстрація використання Context API та кастомних хуків у React.</p>
      <p>Поточна тема: {theme}</p>
    </main>
  );
};

export default Content;