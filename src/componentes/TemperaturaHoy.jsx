import React from 'react'
import styled from 'styled-components';

const Hoy = styled.div`
    grid-area: 1 / 1 / 1 / 4;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    height:100%;
    width:100%;
    background:linear-gradient(45deg, #adadad, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    padding:0.5rem;
`
const IconoCont = styled.p`
    grid-area: 1 / 1 / 5 / 1;
`

const Ico = styled.img`
    max-width: 8rem;
    height: auto;
`

const Desc = styled.p`
    grid-area: 5 / 1 / 5 / 1;
    font-size: 1.2rem;
`

const Temp = styled.p`
    grid-area: 1 / 2 / 4 / 2;
    font-size: 4rem;
`

const Max = styled.p`
    grid-area: 4 / 2 / 4 / 2;
    font-size: 1.2rem;
`

const Min = styled.p`
    grid-area: 5 / 2 / 5 / 2;
    font-size: 1.2rem;
`

const TemperaturaHoy = ({tempAct,tempMax,tempMin,lluv,weathercode,weathercodeDef}) => {
  return (
    <Hoy>
      <IconoCont><Ico src={require(`./weatherIcons/${weathercode}.png`)} alt={weathercode}/></IconoCont>
      <Temp>{tempAct}°C</Temp>
      <Max>T°C Max: {tempMax}</Max>
      <Min>T°C Min: {tempMin}</Min>
      <Desc>{weathercodeDef}</Desc>
        {/* <Lluv>Prob. de lluvia: {lluv}%</Lluv>  */}
    </Hoy>
  )
}

export default TemperaturaHoy;