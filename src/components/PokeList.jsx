import React, { useEffect} from 'react';
import { getAll } from "../api/pokeapi";

export const PokeList = () => {
  
  
  useEffect(()=>{
    handleOnSearch();
  },[])

  const handleOnSearch = async() => {
    await getAll().then((response) => {
      //console.log(response)
      response.map((res) =>console.log(res))
    })
  };


  
  return (
    <div>list</div>
    )
  }
  