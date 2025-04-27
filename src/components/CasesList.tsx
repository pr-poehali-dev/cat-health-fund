import CatCard, { CatCardProps } from "@/components/CatCard";

// Примеры данных для карточек
const catsData: CatCardProps[] = [
  {
    id: "1",
    name: "Мурзик",
    age: "2 года",
    condition: "Срочная операция",
    description: "Мурзик попал под машину и нуждается в срочной операции на задних лапах. Он очень терпеливый и ласковый кот, который не заслуживает страданий.",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop",
    goal: 45000,
    raised: 23500,
  },
  {
    id: "2",
    name: "Пушинка",
    age: "8 месяцев",
    condition: "Лечение пневмонии",
    description: "Малышка Пушинка была найдена в подвале с тяжелой пневмонией. Сейчас ей требуется длительный курс лечения и специальное питание для восстановления.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
    goal: 25000,
    raised: 18750,
  },
  {
    id: "3",
    name: "Барсик",
    age: "5 лет",
    condition: "Онкология",
    description: "У Барсика обнаружили опухоль, которая требует срочного лечения. Ему нужна химиотерапия и последующая реабилитация под наблюдением ветеринаров.",
    image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop",
    goal: 75000,
    raised: 27000,
  },
];

interface CasesListProps {
  limit?: number;
}

const CasesList = ({ limit }: CasesListProps) => {
  // Если указан лимит, показываем только указанное количество карточек
  const displayedCats = limit ? catsData.slice(0, limit) : catsData;
  
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {displayedCats.map((cat) => (
        <CatCard key={cat.id} {...cat} />
      ))}
    </div>
  );
};

export default CasesList;