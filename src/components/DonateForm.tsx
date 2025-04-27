import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Copy } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const DonateForm = () => {
  const [amount, setAmount] = useState("500");
  const [customAmount, setCustomAmount] = useState("");
  
  const handleAmountChange = (value: string) => {
    setAmount(value);
    if (value !== "custom") {
      setCustomAmount("");
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const donationAmount = amount === "custom" ? customAmount : amount;
    alert(`Спасибо за вашу поддержку! Сумма пожертвования: ${donationAmount} ₽`);
  };

  const copyCardNumber = () => {
    navigator.clipboard.writeText("2202208376143336");
    toast({
      title: "Скопировано!",
      description: "Номер карты скопирован в буфер обмена",
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
        <Tabs defaultValue="online" className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="online">Онлайн-оплата</TabsTrigger>
            <TabsTrigger value="card">По реквизитам</TabsTrigger>
          </TabsList>
          
          <TabsContent value="online">
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label>Сумма пожертвования</Label>
                <RadioGroup 
                  value={amount} 
                  onValueChange={handleAmountChange}
                  className="grid grid-cols-3 gap-3"
                >
                  <div>
                    <RadioGroupItem 
                      value="100" 
                      id="amount-100" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="amount-100" 
                      className="flex justify-center rounded-md border border-input p-3 hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent text-center cursor-pointer"
                    >
                      100 ₽
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="500" 
                      id="amount-500" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="amount-500" 
                      className="flex justify-center rounded-md border border-input p-3 hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent text-center cursor-pointer"
                    >
                      500 ₽
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="1000" 
                      id="amount-1000" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="amount-1000" 
                      className="flex justify-center rounded-md border border-input p-3 hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent text-center cursor-pointer"
                    >
                      1000 ₽
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="2000" 
                      id="amount-2000" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="amount-2000" 
                      className="flex justify-center rounded-md border border-input p-3 hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent text-center cursor-pointer"
                    >
                      2000 ₽
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="5000" 
                      id="amount-5000" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="amount-5000" 
                      className="flex justify-center rounded-md border border-input p-3 hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent text-center cursor-pointer"
                    >
                      5000 ₽
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="custom" 
                      id="amount-custom" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="amount-custom" 
                      className="flex justify-center rounded-md border border-input p-3 hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent text-center cursor-pointer"
                    >
                      Другая
                    </Label>
                  </div>
                </RadioGroup>
                {amount === "custom" && (
                  <div className="mt-3">
                    <Input
                      type="number"
                      placeholder="Введите сумму"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      min="10"
                      className="text-center"
                    />
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input id="name" placeholder="Иван Иванов" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Электронная почта</Label>
                <Input id="email" type="email" placeholder="ivan@example.com" />
                <p className="text-xs text-muted-foreground">
                  Мы отправим вам подтверждение о пожертвовании
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение (необязательно)</Label>
                <Input id="message" placeholder="Ваше пожелание или комментарий" />
              </div>
              
              <Button type="submit" className="w-full">
                Помочь котикам
              </Button>
              
              <p className="text-xs text-center text-muted-foreground pt-2">
                Нажимая кнопку, вы соглашаетесь с нашей{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </TabsContent>
          
          <TabsContent value="card" className="space-y-4 mt-4">
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
            
            <div className="space-y-2">
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
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DonateForm;