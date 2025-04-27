import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

export interface CatCardProps {
  id: string;
  name: string;
  age: string;
  condition: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
}

const CatCard = ({ id, name, age, condition, description, image, goal, raised }: CatCardProps) => {
  const progress = Math.min(Math.round((raised / goal) * 100), 100);
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={`Фото кота ${name}`} 
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{name}</CardTitle>
          <span className="text-sm bg-accent rounded-full px-2 py-0.5">{age}</span>
        </div>
        <CardDescription className="font-medium text-primary">
          {condition}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm line-clamp-3 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Собрано: {raised.toLocaleString()} ₽</span>
            <span>Цель: {goal.toLocaleString()} ₽</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" asChild>
          <Link to={`/cat/${id}`}>Помочь {name}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CatCard;