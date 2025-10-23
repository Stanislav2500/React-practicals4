import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <h1>Мій сайт</h1>
      <button onClick={toggleTheme}>
        Перемкнути на {theme === 'light' ? 'темну' : 'світлу'} тему
      </button>
    </header>
  );
};

export default Header;