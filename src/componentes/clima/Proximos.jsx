import React from 'react'
import styled from 'styled-components';

    // Usa 'flex' en columnas para ordenar el pronóstico de los próximos días de arriba para abajo.
const Prox = styled.div`
    grid-area: 1 / 4 / 4 / 4;
    height:100%;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:1rem;
`
    // Sirve de contenedor para cada día de pronóstico.
const Dia = styled.div`
    height:100%;
    background:linear-gradient(315deg, #adadad, grey);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`
    // Define el tamaño del téxto de cada día.
const Titulo = styled.p`
    font-size: 1.5rem;
    margin-top:0.5rem;
`
    // Crea un contenedor para IcoI permitiendo que quede centrado.
const IcoD = styled.div`
    display: flex;
    justify-content: center;
`
    // Define el tamaño máximo del ícono de clima (se muestra más pequeño en pantallas más angostas).
const IcoI = styled.img`
    max-width: 5rem;
    height: auto;
    @media (max-height: 910px) {
        max-width: 4rem;
    }
    @media (max-width: 768px) {
        max-width: 3rem;
    }
`
    // Crea un contenedor para Max y Min permitiendo que esten en la misma fila.
const MaxMin = styled.div`
    display: flex;
    justify-content: center;
    gap:0.5rem;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`
    // Determina la fuente de ambas temperaturas.
const Temp = styled.p`
    font-size: 1rem;
`
    // Modifica el tamaño del símbolo de grados centígrados de los datos pequeños.
const SupC = styled.sup`
    font-size: 0.7rem;
`

const Proximos = ({icon,max,min}) => {
  return (
    <Prox>

        <Dia>
            <Titulo>Mañana</Titulo>
            <IcoD>
                <IcoI src={require(`../../assets/weatherIcons/${icon[1]}.png`)} alt={icon[1]}/>
            </IcoD>
            <MaxMin>
                <Temp>Max: {max[1]}<SupC>°C</SupC></Temp>
                <Temp>Min: {min[1]}<SupC>°C</SupC></Temp>
            </MaxMin>
        </Dia>
    
        <Dia>
            <Titulo>En 2 Días</Titulo>
            <IcoD>
                <IcoI src={require(`../../assets/weatherIcons/${icon[2]}.png`)} alt={icon[2]}/>
            </IcoD>
            <MaxMin>
                <Temp>Max: {max[2]}<SupC>°C</SupC></Temp>
                <Temp>Min: {min[2]}<SupC>°C</SupC></Temp>
            </MaxMin>
        </Dia>

        <Dia>
            <Titulo>En 3 Días</Titulo>
            <IcoD>
                <IcoI src={require(`../../assets/weatherIcons/${icon[3]}.png`)} alt={icon[3]}/>
            </IcoD>
            <MaxMin>
                <Temp>Max: {max[3]}<SupC>°C</SupC></Temp>
                <Temp>Min: {min[3]}<SupC>°C</SupC></Temp>
            </MaxMin>
        </Dia>

        <Dia>
            <Titulo>En 4 Días</Titulo>
            <IcoD>
                <IcoI src={require(`../../assets/weatherIcons/${icon[4]}.png`)} alt={icon[4]}/>
            </IcoD>
            <MaxMin>
                <Temp>Max: {max[4]}<SupC>°C</SupC></Temp>
                <Temp>Min: {min[4]}<SupC>°C</SupC></Temp>
            </MaxMin>
        </Dia>

    </Prox>
  )
}

export default Proximos;