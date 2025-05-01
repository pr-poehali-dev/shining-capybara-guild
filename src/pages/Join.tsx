
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const JoinPage = () => {
  const [selectedClass, setSelectedClass] = useState("healer");

  const classes = [
    {
      id: "healer",
      name: "Целитель",
      description: "Мастера исцеления и поддержки, способные восстанавливать жизненные силы и оберегать своих союзников.",
      image: "https://cdn.poehali.dev/files/bc6c853e-368c-4051-a21b-1eb7c47cbd30.jpeg",
      skills: ["Исцеление", "Защитные чары", "Травничество", "Эмпатия"],
      benefits: ["Уважение в гильдии", "Доступ к редким травам", "Особая мантия целителя"],
      difficulty: "Средняя"
    },
    {
      id: "mage",
      name: "Маг",
      description: "Мудрые капибары, изучающие тайны стихий и способные управлять силами природы с помощью древних знаний.",
      image: "https://cdn.poehali.dev/files/ce60d360-6f4e-476a-befa-548436c46313.jpg",
      skills: ["Стихийная магия", "Зачарование", "Телекинез", "Ясновидение"],
      benefits: ["Библиотека древних свитков", "Магическая лаборатория", "Посох силы"],
      difficulty: "Высокая"
    },
    {
      id: "archer",
      name: "Лучник",
      description: "Меткие стрелки и следопыты, чьи стрелы всегда находят цель, а знание леса помогает выжить в любых условиях.",
      image: "https://cdn.poehali.dev/files/723618b7-7772-49d5-afed-aede061976c6.jpeg",
      skills: ["Меткая стрельба", "Выслеживание", "Маскировка", "Скорость"],
      benefits: ["Лук из священного дерева", "Тренировочный полигон", "Особая форма гильдии"],
      difficulty: "Средняя"
    },
    {
      id: "warrior",
      name: "Воин",
      description: "Бесстрашные защитники гильдии, владеющие древними боевыми искусствами и готовые стоять до последнего.",
      image: "https://cdn.poehali.dev/files/3c36ce4d-d197-4347-99fc-d64cf6b2f7b8.jpg",
      skills: ["Владение оружием", "Тактика", "Выносливость", "Лидерство"],
      benefits: ["Золотые доспехи", "Личное оружие", "Высокий статус в гильдии"],
      difficulty: "Высокая"
    }
  ];

  const selectedClassData = classes.find(c => c.id === selectedClass) || classes[0];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gold-500 to-gold-300 py-20">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1589656952384-48bb3fa4d267?w=1080&auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-capybara-900 mb-4">
                Присоединяйтесь к <span className="text-white">Золотой Гильдии</span>
              </h1>
              <p className="text-xl text-capybara-800 mb-8">
                Выберите свой путь и станьте частью древнего братства благородных капибар
              </p>
              <Separator className="bg-gold-200 w-32 h-1 mx-auto mb-8" />
            </div>
          </div>
        </section>
        
        {/* Class Selection Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-capybara-900 text-center mb-8">
                Выберите класс капибары
              </h2>
              
              <Tabs defaultValue="classes" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="classes">Классы капибар</TabsTrigger>
                  <TabsTrigger value="application">Заявка на вступление</TabsTrigger>
                </TabsList>
                
                <TabsContent value="classes" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {classes.map((classItem) => (
                      <Card 
                        key={classItem.id}
                        className={`cursor-pointer transition-all hover:shadow-md border-2 ${
                          selectedClass === classItem.id ? 'border-gold-500 bg-gold-50' : 'border-gold-100'
                        }`}
                        onClick={() => setSelectedClass(classItem.id)}
                      >
                        <div className="aspect-square relative overflow-hidden">
                          <img 
                            src={classItem.image} 
                            alt={classItem.name} 
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge variant="secondary" className="bg-gold-500 text-capybara-900 font-semibold">
                              Сложность: {classItem.difficulty}
                            </Badge>
                          </div>
                          {selectedClass === classItem.id && (
                            <div className="absolute top-3 left-3">
                              <Badge variant="default" className="bg-gold-600 text-white">
                                <Icon name="Check" size={14} className="mr-1" /> Выбрано
                              </Badge>
                            </div>
                          )}
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-capybara-900 flex items-center gap-2">
                            {classItem.name}
                          </CardTitle>
                          <CardDescription className="text-capybara-700">
                            {classItem.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                  
                  <Card className="border-gold-200 mt-8">
                    <CardHeader>
                      <CardTitle>Подробнее о классе: {selectedClassData.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-capybara-900 mb-2">Навыки и умения:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedClassData.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="bg-capybara-50 text-capybara-700 border-capybara-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-capybara-900 mb-2">Привилегии:</h4>
                        <ul className="space-y-1 text-capybara-700">
                          {selectedClassData.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Icon name="CircleCheck" size={16} className="text-gold-500 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-gold-500 hover:bg-gold-600 text-capybara-900 font-medium w-full">
                        Выбрать класс {selectedClassData.name} <Icon name="ArrowRight" className="ml-2" size={18} />
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="application">
                  <Card className="border-gold-200">
                    <CardHeader>
                      <CardTitle>Заявка на вступление в гильдию</CardTitle>
                      <CardDescription>
                        Заполните форму, чтобы присоединиться к Золотой Гильдии Сияющих Капибар
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input id="name" placeholder="Введите ваше имя" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Выбранный класс</Label>
                        <RadioGroup defaultValue={selectedClass} className="grid grid-cols-2 gap-4">
                          {classes.map((classItem) => (
                            <div key={classItem.id} className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value={classItem.id} 
                                id={classItem.id} 
                                onClick={() => setSelectedClass(classItem.id)}
                              />
                              <Label htmlFor={classItem.id} className="cursor-pointer">{classItem.name}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="experience">Ваш опыт</Label>
                        <Textarea 
                          id="experience" 
                          placeholder="Расскажите о своём опыте и почему вы хотите присоединиться к гильдии"
                          className="min-h-32"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="skills">Особые навыки</Label>
                        <Input id="skills" placeholder="Укажите свои особые навыки и таланты" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="border-gold-400 text-capybara-800 hover:bg-gold-100">
                        Очистить форму
                      </Button>
                      <Button className="bg-gold-500 hover:bg-gold-600 text-capybara-900 font-medium">
                        Отправить заявку <Icon name="Send" className="ml-2" size={18} />
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-capybara-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-capybara-900">Отзывы членов гильдии</h2>
              <Separator className="bg-gold-300 w-24 h-1 mx-auto my-4" />
              <p className="text-capybara-700 max-w-2xl mx-auto">
                Узнайте, что говорят капибары, которые уже стали частью нашего братства
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gold-200 bg-white hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Icon name="Quote" size={24} className="text-gold-400" />
                  </div>
                  <p className="text-capybara-700 text-center mb-6 italic">
                    "Вступление в Золотую Гильдию изменило мою жизнь. Обучение целительству открыло во мне таланты, о которых я даже не подозревала!"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1560743641-3914f2c45636?w=100&auto=format&fit=crop&q=80" 
                        alt="Речная Росинка" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-capybara-900">Речная Росинка</p>
                      <p className="text-sm text-capybara-600">Целитель, 2 года в гильдии</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gold-200 bg-white hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Icon name="Quote" size={24} className="text-gold-400" />
                  </div>
                  <p className="text-capybara-700 text-center mb-6 italic">
                    "Тренировки в гильдии помогли мне стать лучшим воином среди всех капибар. Горжусь своими золотыми доспехами и статусом защитника!"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1602309086291-7a8ff593e5a1?w=100&auto=format&fit=crop&q=80" 
                        alt="Громогрив" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-capybara-900">Громогрив</p>
                      <p className="text-sm text-capybara-600">Воин, 5 лет в гильдии</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gold-200 bg-white hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Icon name="Quote" size={24} className="text-gold-400" />
                  </div>
                  <p className="text-capybara-700 text-center mb-6 italic">
                    "Магические свитки, древние артефакты и мудрые наставники — всё это я нашёл в Золотой Гильдии. Теперь я могу управлять стихиями!"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1591728352649-285064e7d32d?w=100&auto=format&fit=crop&q=80" 
                        alt="Звёздный Шёпот" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-capybara-900">Звёздный Шёпот</p>
                      <p className="text-sm text-capybara-600">Маг, 3 года в гильдии</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JoinPage;
