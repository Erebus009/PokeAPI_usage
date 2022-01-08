import React, { Component } from "react";
import PokeCard from "./PokeCard";
import axios from "axios";

export default class PokeList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=151",
    pokemon: null,
  };
   async componentDidMount() {
    const response =  await axios.get(this.state.url);
    this.setState({ pokemon: response.data["results"] });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.pokemon ? (
            <div className="row">
              {this.state.pokemon.map((pokemon) => (
                <PokeCard 
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                type={pokemon.type}
                />
              ))}
            </div>
          ) : (
            <h1>Loading Pokemon...</h1>
          )}
        </div>
      </React.Fragment>
    );
  }
}
