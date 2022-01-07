import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import pokeball from "./images/4.svg";

const Nav = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={pokeball}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            PokeDex with React
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
