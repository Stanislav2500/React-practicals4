import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <p>&copy; 2023 Мій сайт. Усі права захищені.</p>
    </footer>
  );
};

export default Footer;