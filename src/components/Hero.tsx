import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-accent">
      <div className="container px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Подарите шанс на здоровую жизнь
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Каждое ваше пожертвование помогает спасти бездомных кошек, нуждающихся в срочном лечении и заботе. Вместе мы можем изменить их судьбу!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link to="/donate">Помочь сейчас</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/cases">Посмотреть истории</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto grid max-w-[400px] items-start gap-6 sm:max-w-[500px] md:max-w-[550px] lg:max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=1992&auto=format&fit=crop" 
              alt="Кошка на лечении" 
              className="mx-auto aspect-square w-full rounded-xl object-cover sm:aspect-[4/3] lg:aspect-[16/9]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;