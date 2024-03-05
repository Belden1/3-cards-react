export default function Button({ title }: { title: string }) {
  return (
    <button
      className={`font-Lexend-Deca w-28 rounded-full border border-solid border-white bg-white p-2 transition duration-500 ease-in-out ${
        title === 'Sedans'
          ? 'text-bright-orange hover:bg-bright-orange hover:text-white'
          : title === 'SUVs'
            ? 'text-dark-cyan hover:bg-dark-cyan hover:text-white'
            : 'text-very-dark-cyan hover:bg-very-dark-cyan hover:text-white'
      }`}
    >
      Learn More
    </button>
  );
}
