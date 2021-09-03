import React, { useContext } from 'react';
import { DetailsContext } from '../../../context/DetailsContext';

type Props = {
  id: number;
  name: string;
  innerRef?: (node: unknown) => void;
};

function ListItem({ id, name, innerRef }: Props) {
  const { getPokemonDetails } = useContext(DetailsContext) as ContextType;

  return (
    <div
      className="bg-white rounded-xl uppercase text-center p-2 border-black border-2 flex flex-col justify-center break-normal cursor-pointer"
      onClick={() => getPokemonDetails(id)}
      data-id={id}
      ref={innerRef}>
      {name}
      <img
        className="mx-auto"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
    </div>
  );
}

export default ListItem;
