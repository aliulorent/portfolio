import React from 'react'
import Image from "next/image"
import "./pokeTypes.css"

function PokemonCard({pokemon, handleClick}:any) {
  return (
    <>
        <div onClick={() => handleClick(pokemon) as any} className='pokemon-container flex flex-col justify-center content-center min-w-[20%] m-2.5 mb-8 p-2 pb-3 min-h-fit rounded-md outline outline-3 relative bg-off-white outline-off-red drop-shadow-lg transition ease-in-out delay-0 hover:scale-105 hover:outline-dark-off-red cursor-pointer'>
            <h5 className='text-right font-bold -mt-1 p-0 text-opacity-55 text-[#AC9362]'>{pokemon.id}</h5>
            <Image className="absolute left-[50%] -ml-[48px] p-0 -top-8 pokePic" alt={pokemon.name}src = {pokemon.sprites.front_default} height={96} width={96}></Image>
            <h2 className='text-center pt-6 font-bold text-navy-blue text-lg pokemonName'>{pokemon.name}</h2>
            <div className='type-container flex flex-row justify-center'>
                {pokemon.types.map((t:any) => <div className={`m-1 mt-2 p-1 pt-0 rounded-md ${t.type.name}`} key={t.type.name}><h4 className='text-center text-white text-sm pokemonName'>{t.type.name}</h4></div>  )}
            </div>
        </div>
    </>
  )
}

export default PokemonCard