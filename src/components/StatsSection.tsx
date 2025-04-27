const StatsSection = () => {
  return (
    <div className="bg-primary/5 py-12 md:py-16">
      <div className="container px-4">
        <h2 className="text-2xl font-bold text-center mb-8 md:text-3xl">Мы помогаем кошкам с 2020 года</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary md:text-5xl">157</p>
            <p className="text-sm mt-2">Спасенных котов</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary md:text-5xl">₽2.4M</p>
            <p className="text-sm mt-2">Собрано пожертвований</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary md:text-5xl">36</p>
            <p className="text-sm mt-2">Сложных операций</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary md:text-5xl">94</p>
            <p className="text-sm mt-2">Нашли новый дом</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;