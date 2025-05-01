
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CapybaraCard from "@/components/CapybaraCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const capybaras = [
    {
      name: "Златозуб",
      title: "Верховный казначей",
      image: "https://images.unsplash.com/photo-1597356820725-5fc223c8b3c0?w=500&auto=format&fit=crop&q=80",
      skills: ["Алхимия", "Учёт", "Плавание"],
      level: 5
    },
    {
      name: "Янтарка",
      title: "Мастер украшений",
      image: "https://images.unsplash.com/photo-1574243121586-ea97fbc2d42d?w=500&auto=format&fit=crop&q=80",
      skills: ["Ювелирное дело", "Торговля", "Дизайн"],
      level: 4
    },
    {
      name: "Златоцвет",
      title: "Хранитель традиций",
      image: "https://images.unsplash.com/photo-1580578551052-986a208e4896?w=500&auto=format&fit=crop&q=80",
      skills: ["История", "Травничество", "Ораторство"],
      level: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gold-200 to-gold-50 py-20">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1580578551052-986a208e4896?w=1080&auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="container relative">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-capybara-900 mb-4">
                Золотая Гильдия <span className="text-gold-600">Сияющих Капибар</span>
              </h1>
              <p className="text-xl text-capybara-800 mb-8">
                Объединяем самых благородных и блистательных капибар во имя общего процветания
              </p>
              <div className="flex flex-col sm:flex-row gap-4">

                <Button className="bg-gold-500 hover:bg-gold-600 text-capybara-900 font-medium">
                  <Link to="/join" className="flex items-center">Вступить в гильдию <Icon name="ArrowRight" className="ml-2" size={18} /></Link>
                </Button>

                </Button>
                <Button variant="outline" className="border-gold-400 text-capybara-800 hover:bg-gold-100">
                  Узнать больше <Icon name="Info" className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1589656952384-48bb3fa4d267?w=800&auto=format&fit=crop&q=80" 
                  alt="Золотая капибара" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-capybara-900 mb-4">О нашей гильдии</h2>
                <Separator className="bg-gold-300 w-24 h-1 mb-6" />
                <p className="text-capybara-700 mb-4">
                  Золотая Гильдия Сияющих Капибар была основана в древние времена, когда первые капибары обнаружили таинственное золотое русло в глубинах Великой Реки.
                </p>
                <p className="text-capybara-700 mb-6">
                  С тех пор мы храним традиции золотодобычи, ювелирного мастерства и мудрости. Наша миссия — объединить благородных капибар для создания прекрасного мира, где каждый может засиять.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold-100">
                      <Icon name="Award" className="text-gold-500" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-capybara-900">Мастерство</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold-100">
                      <Icon name="Users" className="text-gold-500" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-capybara-900">Братство</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold-100">
                      <Icon name="Heart" className="text-gold-500" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-capybara-900">Забота</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold-100">
                      <Icon name="Sparkles" className="text-gold-500" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-capybara-900">Сияние</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Members Section */}
        <section className="py-16 bg-capybara-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-capybara-900">Выдающиеся капибары</h2>
              <Separator className="bg-gold-300 w-24 h-1 mx-auto my-4" />
              <p className="text-capybara-700 max-w-2xl mx-auto">
                Познакомьтесь с некоторыми из наших самых блистательных членов гильдии, 
                чей вклад и достижения внесли огромный вклад в наше сообщество.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capybaras.map((capybara, index) => (
                <CapybaraCard
                  key={index}
                  name={capybara.name}
                  title={capybara.title}
                  image={capybara.image}
                  skills={capybara.skills}
                  level={capybara.level}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-gold-400 text-capybara-800 hover:bg-gold-100">
                Все капибары <Icon name="ChevronRight" className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Join Section */}
        <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-400 text-white">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-capybara-900 mb-4">Присоединяйтесь к Золотой Гильдии</h2>
              <p className="text-capybara-800 max-w-2xl mx-auto mb-8">
                Станьте частью древнего сообщества сияющих капибар. Получите доступ к тайным знаниям, найдите новых друзей и раскройте свой потенциал!
              </p>
              <Button className="bg-capybara-900 hover:bg-capybara-800 text-gold-100">
                Подать заявку <Icon name="Send" className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
