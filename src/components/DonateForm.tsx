import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Copy } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const DonateForm = () => {
  const copyCardNumber = () => {
    navigator.clipboard.writeText("2202208376143336");
    toast({
      title: "Скопировано!",
      description: "Номер карты скопирован в буфер обмена",
    });
  };
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за вашу поддержку!",
      description: "Пожалуйста, переведите средства на указанный номер карты.",
    });
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Сделать пожертвование</CardTitle>
        <CardDescription>
          Ваша поддержка помогает спасать жизни кошек
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-accent/50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <Label className="font-semibold">Карта СберБанка</Label>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={copyCardNumber}
                title="Скопировать номер карты"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-lg font-mono tracking-wider text-center mb-2">2202 2083 7614 3336</p>
            <p className="text-sm text-muted-foreground">Перевод средств осуществляется напрямую на карту благотворительного фонда "КотоПомощь".</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Ваше имя</Label>
              <Input 
                id="name" 
                placeholder="Иван Иванов" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Электронная почта</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="ivan@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Мы отправим вам подтверждение о получении пожертвования
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Сообщение (необязательно)</Label>
              <Input 
                id="message" 
                placeholder="Ваше пожелание или комментарий" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            
            <Button type="submit" className="w-full">
              Помочь котикам
            </Button>
          </form>
          
          <div className="space-y-2 mt-4">
            <h3 className="font-medium">Как перевести деньги:</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li>Откройте приложение вашего банка</li>
              <li>Выберите "Перевод по номеру карты"</li>
              <li>Введите номер карты: 2202208376143336</li>
              <li>Укажите сумму пожертвования</li>
              <li>В комментарии напишите "Помощь котикам"</li>
              <li>Подтвердите перевод</li>
            </ol>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm">После перевода, напишите нам на <a href="mailto:info@kotopomosh.ru" className="text-primary hover:underline">info@kotopomosh.ru</a>, чтобы мы могли поблагодарить вас и отчитаться о том, как были использованы средства.</p>
          </div>
          
          <p className="text-xs text-center text-muted-foreground pt-2">
            Нажимая кнопку, вы соглашаетесь с нашей{" "}
            <a href="/privacy" className="text-primary hover:underline">
              политикой конфиденциальности
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonateForm;