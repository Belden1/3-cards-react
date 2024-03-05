import Card from './components/Card/Card';

export default function App() {
  return (
    <div className="mx-auto my-20 flex min-h-screen w-[325px] flex-col items-center justify-center text-base text-white md:my-0 md:w-[1440px] md:flex-row">
      <Card
        image="icon-sedans.svg"
        title="Sedans"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
        or on your next road trip."
      />
      <Card
        image="icon-suvs.svg"
        title="SUVs"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
        and off-road adventures."
      />
      <Card
        image="icon-luxury.svg"
        title="Luxury"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
        rental and arrive in style."
      />
    </div>
  );
}
