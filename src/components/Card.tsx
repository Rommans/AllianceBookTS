interface ICard {
  imgUrl: string;
  name: string;
  id: string | undefined;
}

export const Card = ({ imgUrl, name, id }: ICard) => {
  return (
    <div className="bg-neutral-300 text-gray-900 p-5 text-center rounded-lg shadow-lg">
      <img src={imgUrl} alt={`${name}`} />
      <p
        className= "font-bold text-base lg:text-lg inline-block relative">
        {name}
      </p>
    </div>
  );
};
