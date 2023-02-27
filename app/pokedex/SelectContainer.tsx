import React from 'react'
import Image from "next/image"

const statsMap = new Map();
statsMap.set('attack', 'ATK');
statsMap.set('defense', 'DEF');
statsMap.set('hp', 'HP');
statsMap.set('special-attack', 'S. ATK');
statsMap.set('special-defense', 'S. DEF');
statsMap.set('speed', 'SPD');


function SelectContainer({currSelection}:any) {
  const {name, abilities, sprites, stats, types, id, weight, height} = currSelection;
  return (
    <div className='fixed left-[65vw] m-[3.1rem] mb-0 h-[100vh] p-5 select-container bg-gray-100 w-[20%] rounded-3xl outline outline-off-red drop-shadow-lg'>
      {name
      ?
        <div className='hasSelection flex flex-col items-center'>
          {/* Using an <Image> component won't work for this since it does not support pixelated upscaling! */}
          <img alt={name}src={sprites.front_default} className="p-0 pokePic -translate-y-10" height="384" width="384"></img>
          <div className='selectName flex flex-wrap gap-2 -mt-10 justify-center bg-gray-200 rounded-xl p-2 px-4'>
            <h1 className='font-bold text-2xl text-off-red'>{`#${id}`}</h1>
            <h1 className='pokemonName font-bold text-2xl text-navy-blue'>{name}</h1>
          </div>
          <h1 className='font-bold text-md text-navy-blue m-1 mt-4'>Type(s)</h1>
          <div className='type-container flex flex-row flex-wrap justify-center'>
                {types.map((t:any) => <div className={`m-1 mt-2 p-1 pt-0 rounded-md ${t.type.name}`} key={t.type.name}><h4 className='font-bold text-center text-md text-white pokemonName'>{t.type.name}</h4></div>  )}
            </div>
          <h1 className='font-bold text-md text-navy-blue m-1 mt-4'>Stats</h1>
          <div className='stats-container grid grid-cols-2 gap-1 bg-gray-200 rounded-md p-1 py-4'>
            {stats.map((e:any) => 
              <div className='stat flex flex-row flex-wrap justify-center gap-1 bg-gray-100 rounded-full mx-auto' key={e.stat.name}>
                <h4 className={`font-bold text-white p-2 py-0.5 rounded-full ${e.stat.name}`}>{statsMap.get(e.stat.name)}</h4>
                <p className='font-bold p-2 py-0.5 text-navy-blue'>{e.base_stat}</p>
              </div>)}
          </div>
          <h1 className='font-bold text-md text-navy-blue m-1 mt-4'>Abilities</h1>
          <div className='abilities-container grid grid-cols-2 gap-1'>
            {abilities.map((a:any)=> 
              <div className="ability" key={a.ability.name.concat(String(a.slot))}>
                <h1 className='font-bold bg-gray-200 text-navy-blue text-center p-1 rounded-full'>{a.ability.name.toUpperCase()}</h1>
              </div>)}
          </div>
          <div className='misc-container flex flex-row flex-wrap justify-center gap-1'>
              <div className='height flex flex-col items-center'>
                <h4 className='font-bold text-md text-navy-blue m-1 mt-4 px-6'>Height</h4>
                <h4 className='font-bold bg-gray-200 text-navy-blue p-1 rounded-full'>{height/10} m</h4>
              </div>
              <div className='weight flex flex-col items-center'>
                <h4 className='font-bold text-md text-navy-blue m-1 mt-4 px-6'>Weight</h4>
                <h4 className='font-bold bg-gray-200 text-navy-blue p-1 rounded-full'>{weight/10 } kg</h4>
              </div>
          </div>
        </div>
      : 
      <div className='noSelection'>
      </div>
      }
    </div>
  )
}

export default SelectContainer