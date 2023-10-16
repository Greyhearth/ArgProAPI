import React from 'react'
import styled from 'styled-components';

    // Da formato al recuadro principal.
const Hoy = styled.div`
    grid-area: 1 / 1 / 1 / 4;
    height:100%;
    width:100%;
    background:linear-gradient(45deg, grey, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    padding:0.5rem;
    display:flex;
    gap:0.5rem;
`
    // Crea columnas que muestren los datos
const Seccion = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
    // Crea un contenedor para el ícono de 'weathercode'.
const IcoD = styled.div`
    display: flex;
    justify-content: center;
`
    // Crea el estilo del ícono para controlar su tamaño según la pantalla.
const IcoI = styled.img`
    max-width: 8rem;
    height: auto;
    @media (max-height: 910px) {
        max-width: 6rem;
    }
    @media (max-width: 768px) {
        max-width: 4rem;
    }
`
    // Modifica el tamaño de la fuente de la descripción del 'weathercode'.
const Desc = styled.p`
    font-size: 1.2rem;
`
    // Modifica el tamaño de la fuente de la temperatura actual del día.
const Temp = styled.p`
    font-size: 5rem;
`
    // Modifica el tamaño del símbolo de grados centígrados principal.
const SupG = styled.sup`
    font-size: 1.5rem;
`
    // Modifica el tamaño de la fuente de los datos extra del día.
const Datos = styled.p`
    font-size: 1.2rem;
    margin:0.3rem;
`
    // Modifica el tamaño del símbolo de grados centígrados de los datos pequeños.
    const SupC = styled.sup`
    font-size: 0.7rem;
`

const TemperaturaHoy = ({tempAct,sensTerm,tempMax,tempMin,lluvia,weatherCode,weatherCodeDef}) => {
    const fecha = new Date().toLocaleDateString('es-es', { weekday:"short", day:"numeric", month:"short"});
  return (
    <Hoy>

        <Seccion>
            <Desc>{fecha}</Desc>
            <Temp>{tempAct}<SupG>°C</SupG></Temp>
        </Seccion>

        <Seccion>
            <IcoD>
                <IcoI src={require(`./weatherIcons/${weatherCode}.png`)} alt={weatherCode}/>
            </IcoD>
            <Desc>{weatherCodeDef}</Desc>
        </Seccion>

        <Seccion>
            <Datos>Sens.Term.: {sensTerm}<SupC>°C</SupC></Datos>
            <Datos>Máxima: {tempMax}<SupC>°C</SupC></Datos>
            <Datos>Minima: {tempMin}<SupC>°C</SupC></Datos>
            <Datos>Prob. de lluvia: {lluvia}%</Datos> 
        </Seccion>

    </Hoy>
  )
}

export default TemperaturaHoy;