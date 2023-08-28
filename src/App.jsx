import React, { useState } from "react";
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
    // Estado local para almacenar los datos de los personajes
    const [personajes, setPersonajes] = useState([]);

    return (
        <div className="Superdiv">
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <img
              src="../valouwu.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          <Navbar.Brand href="#home">Valorant Agents</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Agents</Nav.Link>
            <Nav.Link href="#maps">Maps</Nav.Link>
            <Nav.Link href="#weapons">Weapons</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            {/* Renderiza el componente Buscador y le pasa la lista de personajes */}
            <Buscador personajes={personajes} />
            {/* Renderiza el componente MiApi y le pasa la función para actualizar personajes */}
            <MiApi setPersonajes={setPersonajes} />
        </div>
    );
}

export default App;



