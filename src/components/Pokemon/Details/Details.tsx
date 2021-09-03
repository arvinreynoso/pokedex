import React, { useContext } from 'react';
import { DetailsContext } from '../../../context/DetailsContext';
import Loader from '../../Loader';
import DamageRelations from './DamageRelations';
import NotFound from './NotFound';
import Stats from './Stats';

function Details() {
  const { loading, pokemonDetails } = useContext(DetailsContext) as ContextType;

  return (
    <>
      {loading ? (
        <Loader
          className="flex flex-1 items-center justify-center"
          size={256}
          color="#3B82F6"
        />
      ) : pokemonDetails ? (
        <div className="flex flex-col self-center items-center overflow-y-auto w-full">
          <img
            className="w-32 p-4 rounded-full shadow-lg bg-white"
            src={pokemonDetails.image}
            alt={pokemonDetails.name}
          />
          <p className="mt-4 uppercase">
            #{pokemonDetails.id} {pokemonDetails.name}
          </p>
          <ul className="flex">
            {pokemonDetails.types.map((value) => {
              return (
                <li
                  className={`capitalize text-sm text-black py-1 mx-1 px-4 rounded-full shadow border-black border-2 bg-${value}`}
                  key={value}>
                  {value}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 text-sm md:text-base">
            <p className="my-2 text-center flex">
              <span className="flex-auto">
                Weight: {pokemonDetails.dimensions.weightInKg}kg
              </span>
              <span className="flex-auto">
                Height: {pokemonDetails.dimensions.heightInCm}cm
              </span>
            </p>
            <p className="capitalize my-2 text-center">
              Abilties: {pokemonDetails.abilities.join(', ')}
            </p>
            <p className="capitalize my-2 text-center">
              Evolutions: {pokemonDetails.evolutions.join(', ')}
            </p>
          </div>

          <Stats stats={pokemonDetails.stats} />

          <DamageRelations damageRelations={pokemonDetails.damageRelations} />

          <h1 className="capitalize mt-8">Moves</h1>
          <div className="text-xs md:text-sm my-4 bg-white p-4 rounded-lg border-black border-2 shadow-md capitalize">
            {pokemonDetails.moves.join(', ')}
          </div>

          <h1 className="capitalize mt-8">About {pokemonDetails.name}</h1>
          <div className="text-xs md:text-sm my-4 bg-white p-4 rounded-lg border-black border-2 shadow-md">
            {pokemonDetails.description}
          </div>
        </div>
      ) : (
        <NotFound className="flex flex-1 md:mt-8 items-center md:items-start text-center justify-center text-xl md:text-4xl" />
      )}
    </>
  );
}

export default Details;
