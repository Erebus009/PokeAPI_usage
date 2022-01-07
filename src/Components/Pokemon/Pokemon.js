import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const TYPE_COLORS = {
  normal: "A8A77A",
  fire: "EE8130",
  water: "6390F0",
  electric: "F7D02C",
  grass: "7AC74C",
  ice: "96D9D6",
  fighting: "C22E28",
  poison: "A33EA1",
  ground: "E2BF65",
  flying: "A98FF3",
  psychic: "F95587",
  bug: "A6B91A",
  rock: "B6A136",
  ghost: "735797",
  dragon: "6F35FC",
  dark: "705746",
  steel: "B7B7CE",
  fairy: "D685AD",
};

export default class Pokemon extends Component {
  state = {
    name: "",
    PokeIndex: "",
    PokeImage: "",
    types: [],
    description: "",
    height: "",
    weight: "",
    eggGroup: "",
    abilities: "",
    genderRatioMale: "",
    genderRatioFemale: "",
    evs: "",
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      specialAttack: "",
      specialDefense: "",
    },

    hatchSteps: "",
    catchRate: "",
  };

  async componentDidMount() {
    const url = window.location.href;
    const PokeIndex = url.split("/")[url.split("/").length - 1];
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${PokeIndex}/`;
    const pokemonType = `https://pokeapi.co/api/v2/pokemon-species/${PokeIndex}/`;

    const PokeRes = await axios.get(pokemonUrl);

    const height =
      Math.round((PokeRes.data.height * 0.343124 + 0.0001) * 100) / 100;
    const weight =
      Math.round((PokeRes.data.weight * 0.220463 + 0.0001) * 100) / 100;

    const types = PokeRes.data.types.map((type) => type.type.name);

    const abilities = PokeRes.data.abilities.map((ability) => {
      return ability.ability.name
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join("  ");
    });

    const evs = PokeRes.data.stats
      .filter((stat) => {
        if (stat.effort > 0) {
          return true;
        }
        return false;
      })
      .map((stat) => {
        return `${stat.effort} ${stat.stat.name}`
          .toLowerCase()
          .split("-")
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ");
      })
      .join(", ");

    await axios.get(pokemonType).then((res) => {
      let description = "";
      res.data.flavor_text_entries.some(flavor => {
        if (
          flavor.language.name === "en" &&
          flavor.version.name === "omega-ruby"
        ) {
          description = flavor.flavor_text;
          return;
        }
      });

      let { hp, attack, defense, speed, specialDefense, specialAttack } = "";

      PokeRes.data.stats.map((stat) => {
        switch (stat.stat.name) {
          case "hp":
            hp = stat["base_stat"];

            break;

          case "attack":
            attack = stat["base_stat"];
            break;

          case "defense":
            defense = stat["base_stat"];
            break;

          case "speed":
            speed = stat["base_stat"];
            break;

          case "special-attack":
            specialAttack = stat["base_stat"];
            break;

          case "special-defense":
            specialDefense = stat["base_stat"];
            break;
        }
      });

      const femalerate = res.data["gender_rate"];
      const genderRatioFemale = 12.5 * femalerate;
      const genderRatioMale = 12.5 * (8 - femalerate);

      const catchRate = Math.round((100 / 255) * res.data["capture_rate"]);

      const eggGroup = res.data["egg_groups"]
        .map((group) => {
          return group.name
            .toLowerCase()
            .split("-")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
        })
        .join(", ");

      const hatchSteps = 255 * res.data["hatch_counter"] + 1;

      const name = PokeRes.data.name;
      const PokeImage = PokeRes.data.sprites.front_default;

      this.setState({
        name,
        PokeImage,
        description,
        genderRatioFemale,
        genderRatioMale,
        eggGroup,
        hatchSteps,
        catchRate,
        stats: { hp, attack, defense, speed, specialAttack, specialDefense },
      });
    });
    this.setState({
      types,
      height,
      weight,
      PokeIndex,
      abilities,
      evs,
    });
  }

  render() {
    return (
      <div className="col">
        <div className="card shadow">
          <div className="card-header">
            <div className="row">
              <div className="col-5 d-inline d-flex">
                  
                <h5
                  className="badge badge-dark text-white badge-pill shadow"
                  style={{ backgroundColor: "gray", fontSize: "15px" , marginRight: "15px"}}
                >
                  {this.state.PokeIndex}
                  
                </h5><h4>{this.state.name.toLowerCase()
                        .split("-")
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(" ")}</h4>
                
              </div>
              
              <div className="col-7 d-flex container justify-content-end">
                <div className="">
                  {this.state.types.map((type) => (
                    <span
                      key={type}
                      className="badge badge-alert badge-pill mr-2 m-1 shadow"
                      style={{
                        backgroundColor: `#${TYPE_COLORS[type]}`,
                        color: "white",
                        fontSize: "13px",
                      }}
                    >
                      {type
                        .toLowerCase()
                        .split("-")
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(" ")}
                    </span>
                  ))}
                  
                </div>
                
              </div>
            
              <div className="card-body border-top h-100 ">
              <img src={this.state.PokeImage} className="mb-2 text-center sprite justify-content-center d-flex container" style={{height: "100%", width: "100%", minWidth: "150px",minHeight:"100px",maxHeight:"200px", maxWidth:"200px"}}></img>
                  <div className="row">
                  
                  
                  
                  
                  <div className="col-sm">
                      
                      
                    <h4 className="card-header">Description</h4>
                      <div className="col-12 card-body">{this.state.description}</div>
                      <div className="card-body border-top rounded">
              
              <div className="col container d-flex"></div>
              <div className="col-6 ">
                  <h6>Height: {this.state.height} ft.</h6>
                  <h6>Weight: {this.state.weight} Lbs.</h6>
                  <h6>Catch Rate: {this.state.catchRate}%</h6>
                  <h6>Egg Group: {this.state.eggGroup}</h6>
                  <h6>Egg Hatch Steps: {this.state.hatchSteps}</h6>
                     
                  
              </div>
              
          </div>
                      
                  </div>
                  
                  <div className="col-sm card border rounded mx-auto container d-flex justify-content-center shadow">
                        <h4 className="">Base Stats</h4>
                        <p className="">HP: {this.state.stats.hp}</p>
                        <p>Defense: {this.state.stats.defense}</p>
                        <p>Speed: {this.state.stats.speed}</p>
                        <p>Attack: {this.state.stats.attack}</p>
                        <p>Special Attack: {this.state.stats.specialAttack}</p>
                        <p>Special Defense: {this.state.stats.specialDefense}</p>
                        <h4 className="text-center">Ev Gains</h4>
                        <div className=" col-sm-12 align-items-center d-flex justify-content-center">
                        <p className="">{this.state.evs}</p>
                        </div>
                        </div>
                        
                        

                        
                        
                        
                        </div>
                  </div>
                 
                  
            </div>
          </div>
        </div>
      </div>
    );
  }
}
