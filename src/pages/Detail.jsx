import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail, getDescription, getSimilarPokemon } from "../api/pokeapi";
import PokeCarousel from "../components/PokeCarousel";

const Detail = () => {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [detail, setDetail] = useState();
  const [pokeSimilar, setPokeSimilar] = useState();
  useEffect(() => {
    handleGetPokemon();
    handleGetPokemonDescription();
  }, [id]);

  const handleGetPokemon = () => {
    getDetail(id).then((response) => {
      const type = response?.types?.find((type) => type.slot === 1).type.name;

      handleGetPokemonSimilar(type);
      setPokemon(response);
    });
  };

  const handleGetPokemonDescription = () => {
    getDescription(id).then((response) => {
      setDetail(response);
    });
  };

  const handleGetPokemonSimilar = async (type) => {
    getSimilarPokemon(type).then((response) => {
      setPokeSimilar(response.pokemon);
    });
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div key={pokemon?.species?.name} className="col-lg-3 col-sm-12">
          <div className="card">
            <img
              src={pokemon?.sprites?.other?.dream_world?.front_default}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title pokeTitle">{pokemon?.species?.name}</h5>
              <p className="card-text">{detail}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="card">
            <PokeCarousel pokeSimilar={pokeSimilar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
