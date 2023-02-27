"use client"
import React, {useEffect, useState, useRef} from 'react'
import PokemonCard from './PokemonCard';
import SelectContainer from './SelectContainer';

function Pokedex() {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [count, setCount] = useState<number>(1008);
  const [toggleButton, setToggleButton] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  // This function is triggered each time the user clicks the "Load more" button
  // This function fetches the data for the next 20 pokemon in the PokeAPI, sets 
  // the link state for the next 20 afterwards, and also fetches the more detailed 
  // data for each specific pokemon. We then append this data to our current state 
  // holding our list of pokemon so that we can keep infinitely scrolling.
  const fetchNext = async () =>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pokemon.length}&limit=${Math.min(50, count-pokemon.length)}`);
    if(!res.ok){
      return;
    }
    const simpleList = await res.json();
    // if (count === 0){
    //   setCount(simpleList.count);
    // }
    let promiseArray = [];
    for (let i =0;i<simpleList.results.length; i++){
      if (simpleList.results[i].url){
        promiseArray.push(fetch(simpleList.results[i].url).then(r => r.json()));
      }
    }
    Promise.all(promiseArray).then((complexList) => {
      setPokemon([...pokemon, ...complexList]);
    });
  }
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const handleScroll = () =>{
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    if (scrollTop + clientHeight >= scrollHeight - 600 && (pokemon.length < count)) {
      document.removeEventListener('scroll', handleScroll);
      fetchNext();
    }
    if(scrollTop > clientHeight){
      setToggleButton(true);
    }
  };
  const handleSelect = (p:any) =>{
    setSelectedPokemon(p);
  }
  // Loading the first 20 pokemon on page load
  useEffect(()=>{
    fetchNext();
  }, []);
  useEffect(()=>{
      document.addEventListener('scroll', handleScroll) 
  }, [pokemon])

  return (
    <>
      <div className='flex flex-row bg-off-blue scroll-smooth'>
          <div className='grid-container flex flex-row flex-wrap m-0 ml-24 p-0 pt-10 justify-center bg-off-blue w-[60%]'>
            {pokemon.map(p => <PokemonCard key= {p.id} pokemon = {p} handleClick={handleSelect} ></PokemonCard>)}
          </div>
          <div className='flex bg-off-blue justify-center'>
            {toggleButton ? <button className="fixed bottom-5 left-5 bg-off-red p-3 m-2.5 w-32 -mt-3 outline outline-off-white drop-shadow-lg rounded-md text-white font-bold" onClick={scrollToTop}>Back to Top</button> : <div className='fixed'></div>}
            {/* <button className="bg-off-red p-3 m-2.5 w-32 -mt-3 outline outline-off-white drop-shadow-lg rounded-md text-white font-bold" onClick={fetchNext}>Load More</button> */}
          </div>
        {<SelectContainer currSelection={selectedPokemon}/>}
      </div>
    </>
  )
}

export default Pokedex