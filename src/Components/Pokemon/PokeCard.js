import React, { Component } from "react";
import spinner from "../layout/images/spinner.gif"
import styled from "styled-components"
import {Link} from "react-router-dom"
const Sprite = styled.img`
width: 5em;
height: 5em`

const StyledLink = styled(Link)`
    text-decoration = none;
    color: black;
    &:focus,
    &:hover{
        color: gray
    },
    &:visited,
    &:link,
    &:active{
        text-decoration: none;
        
    }
  `

export default class PokeCard extends Component {
  state = {
    name: "",
    PokeImage: "",
    PokeIndex: "",
    imageloading : true,
    
  };

  

  componentDidMount() {
    const { name, url } = this.props;
    const PokeIndex = url.split("/")[url.split("/").length - 2];
    const PokeImage = `https://github.com/pokeapi/sprites/blob/master/sprites/pokemon/${PokeIndex}.png?raw=true`;

    this.setState({ name, PokeImage, PokeIndex });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
          <StyledLink to={`pokemon/${this.state.PokeIndex}`}>
        <div className="card shadow">
          <h5 className="card-header bg-dark text-white">{this.state.PokeIndex}</h5>
          <h1>{this.state.type}</h1>
          {this.state.imageloading ? (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img src={spinner} style={{width: '5em', height:'5em'}} className="Sprite rounded mx-auto d-block mt-2" ></img>
          ) : null}
          <Sprite 
          className="Sprite rounded mx-auto mt-2"
          src={this.state.PokeImage}
          onLoad={() => this.setState({imageloading: false})}
          style ={this.state.imageloading ? null : {display:"block"}}

          />
        
          <div className="card-body mx-auto">
          <h6 className="card-title">{this.state.name
          .toLowerCase()
          .split(' ')
          .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</h6>
          
          
          </div>
        </div>
        </StyledLink>
      </div>
    );
  }
}
