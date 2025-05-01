
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-gold-500/90 via-gold-400/90 to-gold-500/90 backdrop-blur-sm border-b border-gold-300">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-lg">
            <span className="text-gold-500 text-xl font-bold animate-shimmer bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 bg-[length:200%_100%] text-transparent bg-clip-text">ЗГ</span>
          </div>
          <Link to="/" className="text-capybara-900 font-bold text-xl hidden md:block">
            Золотая Гильдия
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-capybara-900 font-medium hover:text-gold-700 transition-colors">
            Главная
          </Link>

          <Link to="/join" className="text-capybara-900 font-medium hover:text-gold-700 transition-colors">
            Присоединиться
          </Link>

          </Link>
          <Link to="/members" className="text-capybara-900 font-medium hover:text-gold-700 transition-colors">
            Капибары
          </Link>
          <Link to="/gallery" className="text-capybara-900 font-medium hover:text-gold-700 transition-colors">
            Галерея
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-capybara-900 hover:bg-gold-200">
            <Icon name="Search" size={20} />
          </Button>
          <Button variant="outline" className="hidden md:flex border-gold-600 text-capybara-900 hover:bg-gold-200">
            Присоединиться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
