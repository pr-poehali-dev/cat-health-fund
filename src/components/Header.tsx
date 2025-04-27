import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🐱</span>
            <span className="font-bold text-xl inline-block">КотоПомощь</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link 
              to="/" 
              className="flex items-center text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Главная
            </Link>
            <Link 
              to="/cases" 
              className="flex items-center text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Наши подопечные
            </Link>
            <Link 
              to="/about" 
              className="flex items-center text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              О нас
            </Link>
            <Link 
              to="/reports" 
              className="flex items-center text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Отчёты
            </Link>
          </nav>
        </div>
        
        <div className="ml-auto flex items-center gap-2">
          <Button variant="default" size="sm" asChild>
            <Link to="/donate">Помочь сейчас</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;