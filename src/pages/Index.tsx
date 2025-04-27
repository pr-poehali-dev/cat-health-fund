import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CasesList from "@/components/CasesList";
import StatsSection from "@/components/StatsSection";
import DonateForm from "@/components/DonateForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <section className="container px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Им нужна ваша помощь</h2>
          <CasesList limit={3} />
          <div className="flex justify-center mt-10">
            <a 
              href="/cases" 
              className="inline-flex items-center text-primary hover:underline"
            >
              Посмотреть всех подопечных
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </div>
        </section>
        
        <StatsSection />
        
        <section className="container px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Помогите нам спасать кошачьи жизни</h2>
              <p className="text-muted-foreground">
                Ваши пожертвования идут на лечение, реабилитацию и содержание бездомных кошек. 
                Мы заботимся о питомцах, пока они не найдут новый дом или не поправятся.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>100% средств идут на помощь животным</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Прозрачная отчетность о расходах</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Регулярные обновления о состоянии подопечных</span>
                </li>
              </ul>
            </div>
            <div>
              <DonateForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;