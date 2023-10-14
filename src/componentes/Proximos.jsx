import React from 'react'
import styled from 'styled-components';

const Prox = styled.div`
    grid-area: 1 / 4 / 4 / 4;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, grey);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(16, 1fr);
`

const Ico = styled.img`
    max-width: 5rem;
    height: auto;
    @media (max-height: 910px) {
        max-width: 4rem;
    }
    @media (max-width: 768px) {
        max-width: 3rem;
    }
`

const Man = styled.p`
    grid-area: 1 / 1 / 1 / 3;
`

const IcoM = styled.p`
    grid-area: 2 / 1 / 5 / 3;
`

const MaxM = styled.p`
    grid-area: 4 / 2 / 4 / 2;
    font-size: 1.1rem;
`

const MinM = styled.p`
    grid-area: 4 / 1 / 4 / 1;
    font-size: 1.1rem;
`

const D2 = styled.p`
    grid-area: 5 / 1 / 5 / 3;
`

const IcoD2 = styled.p`
    grid-area: 6 / 1 / 9 / 3;
`

const MaxD2 = styled.p`
    grid-area: 8 / 2 / 8 / 2;
    font-size: 1.1rem;
`

const MinD2 = styled.p`
    grid-area: 8 / 1 / 8 / 1;
    font-size: 1.1rem;
`

const D3 = styled.p`
    grid-area: 9 / 1 / 9 / 3;
`

const IcoD3 = styled.p`
    grid-area: 10 / 1 / 13 / 3;
`

const MaxD3 = styled.p`
    grid-area: 12 / 2 / 12 / 2;
    font-size: 1.1rem;
`

const MinD3 = styled.p`
    grid-area: 12 / 1 / 12 / 1;
    font-size: 1.1rem;
`

const D4 = styled.p`
    grid-area: 13 / 1 / 13 / 3;
`

const IcoD4 = styled.p`
    grid-area: 14 / 1 / 17 / 3;
`

const MaxD4 = styled.p`
    grid-area: 16 / 2 / 16 / 2;
    font-size: 1.1rem;
`

const MinD4 = styled.p`
    grid-area: 16 / 1 / 16 / 1;
    font-size: 1.1rem;
`

const Proximos = ({icon,max,min}) => {
  return (
    <Prox>
      <Man>Mañana</Man>
      <IcoM><Ico src={require(`./weatherIcons/${icon[1]}.png`)} alt={icon[1]}/></IcoM>
      <MaxM>Max: {max[1]}°C</MaxM>
      <MinM>Min: {min[1]}°C</MinM>
      <D2>En 2 Días</D2>
      <IcoD2><Ico src={require(`./weatherIcons/${icon[2]}.png`)} alt={icon[2]}/></IcoD2>
      <MaxD2>Max: {max[2]}°C</MaxD2>
      <MinD2>Min: {min[2]}°C</MinD2>
      <D3>En 3 Días</D3>
      <IcoD3><Ico src={require(`./weatherIcons/${icon[3]}.png`)} alt={icon[3]}/></IcoD3>
      <MaxD3>Max: {max[3]}°C</MaxD3>
      <MinD3>Min: {min[3]}°C</MinD3>
      <D4>En 4 Días</D4>
      <IcoD4><Ico src={require(`./weatherIcons/${icon[4]}.png`)} alt={icon[4]}/></IcoD4>
      <MaxD4>Max: {max[4]}°C</MaxD4>
      <MinD4>Min: {min[4]}°C</MinD4>
    </Prox>
  )
}

export default Proximos;