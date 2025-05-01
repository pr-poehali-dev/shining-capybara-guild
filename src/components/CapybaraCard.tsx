
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface CapybaraCardProps {
  name: string;
  title: string;
  image: string;
  skills: string[];
  level: number;
}

const CapybaraCard = ({ name, title, image, skills, level }: CapybaraCardProps) => {
  return (
    <Card className="overflow-hidden border-gold-200 hover:border-gold-400 transition-all hover:shadow-md">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-gold-500 text-capybara-900 font-semibold">
            <Icon name="Star" size={14} className="mr-1" /> Уровень {level}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-capybara-900">{name}</CardTitle>
        <CardDescription className="text-capybara-700">{title}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-capybara-50 text-capybara-700 border-capybara-200">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-gold-700 hover:text-gold-900 hover:bg-gold-100 w-full">
          Подробнее <Icon name="ChevronRight" size={16} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CapybaraCard;
