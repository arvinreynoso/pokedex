import React from 'react';

type Props = {
  damageRelations: PokemonDetails['damageRelations'];
};

function DamageRelations({ damageRelations }: Props) {
  return (
    <>
      {damageRelations.map((damage) => {
        return Object.entries(damage).map(([key, value]) => {
          return (
            <div
              key={key}
              className="capitalize mt-8 w-full flex flex-col items-center">
              <h1>Strengths – {key}</h1>
              <div className="flex flex-row text-xs md:text-sm">
                <div className="flex flex-1 flex-col text-left bg-white m-2 p-4 border-black border-2 rounded-lg shadow">
                  <h2>Double Damage To</h2>
                  <ul className="list-disc list-inside">
                    {value.doubleDamageTo.map((type, index) => {
                      return <li key={`type-${index}`}>{type}</li>;
                    })}
                  </ul>
                </div>

                <div className="flex flex-1 flex-col text-left bg-white m-2 p-4 border-black border-2 rounded-lg shadow">
                  <h2>Half Damage From</h2>
                  <ul className="list-disc list-inside">
                    {value.halfDamageFrom.map((type, index) => {
                      return <li key={`type-${index}`}>{type}</li>;
                    })}
                  </ul>
                </div>
              </div>

              <h1>Weaknesses – {key}</h1>
              <div className="flex flex-row text-xs md:text-sm">
                <div className="flex flex-1 flex-col text-left bg-white m-2 p-4 border-black border-2 rounded-lg shadow">
                  <h2>Double Damage From</h2>
                  <ul className="list-disc list-inside">
                    {value.doubleDamageFrom.map((type, index) => {
                      return <li key={`type-${index}`}>{type}</li>;
                    })}
                  </ul>
                </div>

                <div className="flex flex-1 flex-col text-left bg-white m-2 p-4 border-black border-2 rounded-lg shadow">
                  <h2>Half Damage To</h2>
                  <ul className="list-disc list-inside">
                    {value.halfDamageTo.map((type, index) => {
                      return <li key={`type-${index}`}>{type}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        });
      })}
      ;
    </>
  );
}

export default DamageRelations;
