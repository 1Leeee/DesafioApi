import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import "./Buscadorcss.css"

const Buscador = ({ personajes }) => {
    const [buscarPj, setBuscarPj] = useState("");

    const filtrarPj = (personaje) => {
        return personaje.displayName.toLowerCase().includes(buscarPj.toLowerCase());
    };

    return (
        <div>
            <input
                id="busqueda"
                type="text"
                placeholder="Buscar Agente"
                className="form-control"
                value={buscarPj}
                onChange={(e) => {
                    setBuscarPj(e.target.value);
                }}
            />
            <div className="personajes-container">
                {personajes.filter(filtrarPj).map(personaje => (
                    <Card key={personaje.uuid} className="personaje-card">
                        <Card.Img variant="top" src={personaje.displayIcon} alt={personaje.displayName} />
                        <Card.Body>
                            <Card.Title>{personaje.displayName}</Card.Title>
                            <Card.Text>{personaje.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Buscador;

