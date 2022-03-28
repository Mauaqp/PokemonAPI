import React, {useState, useEffect} from "react";

const Pokemon = (props) => {

    const [pokemonList, setPokemonList] = useState([]);
    const [URL, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=150")

    const getPokemon = () => {
    // Fetch a la API
    fetch(URL)
        .then((response) => {
        return response.json();
        })
        .then((response) => {
        setPokemonList(response.results);
        })
        .catch((err) => {
        console.log(err);
        });
    }

    return (
    <div>
        <button onClick={getPokemon}>
        Fetch Pokemon
        </button>
        <ol>
        {pokemonList.length > 0 &&
            pokemonList.map((pokemon, index) => {
            return (
                <>
                    <img src={index.sprites}alt={index}/>
                    <li key={index}>{pokemon.name}</li>
                </>
            );
            })}
        </ol>
    </div>
    );
}

export default Pokemon;