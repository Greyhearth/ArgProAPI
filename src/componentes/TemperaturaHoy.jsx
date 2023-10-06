import React from 'react'
import styled from 'styled-components';

const Hoy = styled.div`
    grid-area: 1 / 1 / 1 / 4;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    ${'' /* border: 1px solid black; */}
`

const Encabezado = styled.p`
    grid-area: 1 / 1 / 1 / 5;
    ${'' /* border: 1px solid black; */}
`

const Icono = styled.p`
    grid-area: 2 / 1 / 6 / 1;
    ${'' /* border: 1px solid black; */}
`

const Temp = styled.p`
    grid-area: 2 / 2 / 6 / 3;
    ${'' /* border: 1px solid black; */}
`

const Max = styled.p`
    grid-area: 2 / 3 / 2 / 5;
    ${'' /* border: 1px solid black; */}
`

const Min = styled.p`
    grid-area: 3 / 3 / 3 / 5;
    ${'' /* border: 1px solid black; */}
`

const Lluv = styled.p`
    grid-area: 4 / 3 / 4 / 5;
    ${'' /* border: 1px solid black; */}
`
const Vient = styled.p`
    grid-area: 5 / 3 / 5 / 5;
    ${'' /* border: 1px solid black; */}
`

const TemperaturaHoy = ({tempAct,tempMax,tempMin,lluv,weathercode}) => {
  return (
    <Hoy>
      <Encabezado>Clima Hoy</Encabezado>
      <Icono>{weathercode}</Icono>
      <Temp>{tempAct}°C</Temp>
      <Max>T°C Max: {tempMax}</Max>
      <Min>T°C Min: {tempMin}</Min>
      <Lluv>Prob. de lluvia: {lluv}%</Lluv>
      <Vient>nada en realidad</Vient>
    </Hoy>
  )
}

export default TemperaturaHoy;