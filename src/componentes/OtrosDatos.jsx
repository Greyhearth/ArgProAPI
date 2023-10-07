import React from 'react'
import styled from 'styled-components'

const Otros = styled.div`
    grid-area: 2 / 1 / 4 / 4;
    height:100%;
    width:100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2rem;
`

const A1 = styled.div`
    grid-area: 1 / 1 / 1 / 1;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    padding:1rem;
`

const B1 = styled.div`
    grid-area: 1 / 2 / 1 / 2;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    padding:1rem;
`

const A2 = styled.div`
    grid-area: 2 / 1 / 2 / 1;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    padding:1rem;
`

const B2 = styled.div`
    grid-area: 2 / 2 / 2 / 2;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    padding:1rem;
`

const A3 = styled.div`
    grid-area: 3 / 1 / 3 / 1;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding:1rem;
`

const A3A = styled.p`
    grid-area: 1 / 1 / 1 / 1;
`

const A3B = styled.p`
    grid-area: 1 / 2 / 1 / 2;
`

const A3C = styled.p`
    grid-area: 2 / 1 / 2 / 1;
`

const A3D = styled.p`
    grid-area: 2 / 2 / 2 / 2;
`

const B3 = styled.div`
    grid-area: 3 / 2 / 3 / 2;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    padding:1rem;
`

const Humedad = ({humed}) => {
  return (
    <A1>
      <p>Humedad</p>
      <p>{humed}%</p>
    </A1>
  )
}

const UV = ({uvInd}) => {
  return (
    <B1>
      <p>Indice UV</p>
      <p>{uvInd}</p>
    </B1>
  )
}

const Viento = ({vientoV}) => {
  return (
    <A2>
      <p>Velocidad del Viento</p>
      <p>{vientoV} km/h</p>
    </A2>
  )
}

const Visibilidad = ({visib}) => {
  return (
    <B2>
      <p>Visibilidad</p>
      <p>{visib} km</p>
    </B2>
  )
}

const Amanecer = ({amanec,anoch}) => {
  return (
    <A3>
      <A3A>Amanece:</A3A>
      <A3B>Anochece:</A3B>
      <A3C>{amanec} hs</A3C>
      <A3D>{anoch} hs</A3D>
    </A3>
  )
}

const Calidad = ({calid}) => {
  return (
    <B3>
      <p>Calidad del Aire</p>
      <p>{calid}</p>
    </B3>
  )
}

const OtrosDatos = ({humed,vientoV,vientoD,uvInd,amanec,anoch,visib,calid}) => {
  return (
    <Otros>
      <Humedad humed={humed}/>
      <UV uvInd={uvInd}/>
      <Viento vientoV={vientoV} vientoD={vientoD}/>
      <Visibilidad visib={visib}/>
      <Amanecer amanec={amanec} anoch={anoch}/>
      <Calidad calid={calid}/>
    </Otros>
  )
}

export default OtrosDatos;