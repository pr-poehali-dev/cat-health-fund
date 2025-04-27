import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-10 border-t">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🐱</span>
              <span className="font-bold text-xl">КотоПомощь</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Благотворительный фонд помощи бездомным кошкам, нуждающимся в лечении и заботе.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-sm text-muted-foreground hover:text-foreground">
                  Наши подопечные
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/reports" className="text-sm text-muted-foreground hover:text-foreground">
                  Отчёты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Помощь</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/donate" className="text-sm text-muted-foreground hover:text-foreground">
                  Сделать пожертвование
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-sm text-muted-foreground hover:text-foreground">
                  Стать волонтёром
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-sm text-muted-foreground hover:text-foreground">
                  Партнёрам
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Телефон: +7 (999) 123-45-67
              </li>
              <li className="text-sm text-muted-foreground">
                E-mail: info@kotohelp.ru
              </li>
              <li className="text-sm text-muted-foreground">
                Адрес: г. Москва, ул. Котовая, д. 9
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            © 2025 КотоПомощь. Все права защищены.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Правила использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;