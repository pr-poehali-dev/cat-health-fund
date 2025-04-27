import DonateForm from "@/components/DonateForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Помогите котикам сегодня</h1>
          <p className="text-xl text-muted-foreground">
            Ваше пожертвование помогает нам спасать, лечить и находить дом для бездомных кошек
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <DonateForm />
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">На что идут ваши пожертвования</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background/60 border rounded-lg p-6 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="font-medium mb-2">Лечение</h3>
              <p className="text-sm text-muted-foreground">Оплата ветеринарных услуг, лекарств и операций</p>
            </div>
            
            <div className="bg-background/60 border rounded-lg p-6 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="font-medium mb-2">Питание</h3>
              <p className="text-sm text-muted-foreground">Качественные корма и специальные диеты для больных животных</p>
            </div>
            
            <div className="bg-background/60 border rounded-lg p-6 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-medium mb-2">Приют</h3>
              <p className="text-sm text-muted-foreground">Содержание и обустройство временного дома для питомцев</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
