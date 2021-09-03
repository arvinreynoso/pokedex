import React from 'react';

type Props = {
  stats: PokemonDetails['stats'];
};

function Stats({ stats }: Props) {
  return (
    <>
      <h1 className="capitalize mt-8">Stats</h1>
      <div className="grid grid-rows-4 md:grid-rows-2 grid-cols-2 md:grid-cols-4 gap-2 mt-4 p-2">
        {Object.entries(stats).map(([key, value]) => {
          return (
            <div
              key={key}
              className="bg-white border-black border-2 p-4 md:p-6 flex flex-col overflow-x-hidden text-center rounded-lg shadow-md">
              <span className="text-2xl">{value}</span>
              <span className="text-xs capitalize mt-1">
                {key.replace(
                  /((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g,
                  '.$1',
                )}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Stats;
