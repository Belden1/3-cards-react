import Button from '../Button/Button';

type CardProps = {
  image: string;
  title: string;
  text: string;
};

export default function Card({ image, title, text }: CardProps) {
  return (
    <div
      className={`card ${
        title === 'Sedans'
          ? 'bg-bright-orange rounded-t-lg md:rounded-l-lg md:rounded-tr-none'
          : title === 'SUVs'
            ? 'bg-dark-cyan'
            : 'bg-very-dark-cyan rounded-b-lg md:rounded-r-lg md:rounded-bl-none'
      }`}
    >
      <div className="flex flex-col gap-8">
        <div>
          <img src={image} alt={title} />
        </div>
        <h1 className="font-Big-Shoulders-Display text-2xl font-bold">{title}</h1>
        <p className="font-Lexend-Deca text-transparent-white font-normal">{text}</p>
      </div>
      <Button title={title} />
    </div>
  );
}
