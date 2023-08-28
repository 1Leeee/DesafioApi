import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MiApi = ({ setPersonajes }) => {
    // Función asincrónica para obtener datos de la API
    const obtenerDatos = async () => {
        const url = "https://valorant-api.com/v1/agents";
        try {
            // Hacer una solicitud GET a la API
            const response = await fetch(url);
            // Convertir la respuesta en formato JSON
            const jsonData = await response.json();

            if (Array.isArray(jsonData.data)) {
                // Ordenar los datos alfabéticamente por el nombre de los personajes
                const jsonOrdenado = jsonData.data.sort((a, b) => 
                    a.displayName.localeCompare(b.displayName)
                );
                // Actualizar el estado de personajes usando setPersonajes
                setPersonajes(jsonOrdenado);
            }
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    // Efecto que se ejecuta después de la renderización inicial
    useEffect(() => {
        // Llamar a la función obtenerDatos para obtener y actualizar los datos
        obtenerDatos();
    }, [setPersonajes]); // El efecto se ejecutará si setPersonajes cambia

    return (
        <></>
    );
};

export default MiApi;
