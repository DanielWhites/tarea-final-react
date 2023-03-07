import { PATH, BASE, BASEDESCRIPTION, BASESIMILAR } from "../utils/constant";

export const getAll = async () => {
  const url = `${BASE}`;
  try {
    const response = await fetch(`${url}`).then((response) => response.json());
    return response.results;
  } catch (error) {
    console.log(error);
  }
};

export const getDetail = async (id) => {
  const url = `${BASE}`;
  try {
    console.log(id);
    const response = await fetch(`${url}${id}`).then((response) =>
      response.json()
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getDescription = async (id) => {
  const url = `${BASEDESCRIPTION}`;
  try {
    const pokemonSpeciesResponse = await fetch(`${url}${id}`).then((response) =>
      response.json()
    );
    const pokemonDescription = pokemonSpeciesResponse?.flavor_text_entries.find(
      (entry) => entry.language.name === "es"
    ).flavor_text;
    return pokemonDescription;
  } catch (error) {
    console.log(error);
  }
};

export const getSimilarPokemon = async (type) => {
  try {
    const similarResponse = await fetch(`${PATH}type/${type}`);
    const similarData = await similarResponse.json();

    return similarData;
  } catch (error) {
    console.error(error);
  }
};
