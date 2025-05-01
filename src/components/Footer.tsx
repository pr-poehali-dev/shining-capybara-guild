
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-capybara-900 text-gold-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gold-500 font-bold text-lg mb-4">Золотая Гильдия</h3>
            <p className="text-gold-100/80 text-sm">
              Сообщество сияющих капибар, объединенных общими ценностями и любовью к золоту.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold-500 font-bold mb-4">Ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gold-100/80 hover:text-gold-400 transition-colors text-sm">Главная</Link></li>
              <li><Link to="/about" className="text-gold-100/80 hover:text-gold-400 transition-colors text-sm">О гильдии</Link></li>
              <li><Link to="/members" className="text-gold-100/80 hover:text-gold-400 transition-colors text-sm">Капибары</Link></li>
              <li><Link to="/gallery" className="text-gold-100/80 hover:text-gold-400 transition-colors text-sm">Галерея</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold-500 font-bold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Icon name="MapPin" size={16} className="text-gold-400" />
                <span className="text-gold-100/80">Золотая река, д. 42</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Icon name="Mail" size={16} className="text-gold-400" />
                <span className="text-gold-100/80">info@goldengs.ru</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Icon name="Phone" size={16} className="text-gold-400" />
                <span className="text-gold-100/80">+7 (999) 123-45-67</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold-500 font-bold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-capybara-800 hover:bg-gold-500 transition-colors p-2 rounded-full">
                <Icon name="Instagram" size={18} className="text-gold-100" />
              </a>
              <a href="#" className="bg-capybara-800 hover:bg-gold-500 transition-colors p-2 rounded-full">
                <Icon name="Facebook" size={18} className="text-gold-100" />
              </a>
              <a href="#" className="bg-capybara-800 hover:bg-gold-500 transition-colors p-2 rounded-full">
                <Icon name="Twitter" size={18} className="text-gold-100" />
              </a>
              <a href="#" className="bg-capybara-800 hover:bg-gold-500 transition-colors p-2 rounded-full">
                <Icon name="Youtube" size={18} className="text-gold-100" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-capybara-800 mt-8 pt-6 text-center text-gold-100/60 text-sm">
          © 2025 Золотая Гильдия Сияющих Капибар. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
