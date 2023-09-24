import React from 'react'
import styled from 'styled-components'

const Otros = styled.div`
    grid-area: 2 / 2 / 4 / 5;
    height:100%;
    width:100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1.5rem;
`

const A1 = styled.div`
    grid-area: 1 / 1 / 1 / 1;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
`

const B1 = styled.div`
    grid-area: 1 / 2 / 1 / 2;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
`

const A2 = styled.div`
    grid-area: 2 / 1 / 2 / 1;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
`

const B2 = styled.div`
    grid-area: 2 / 2 / 2 / 2;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
`

const A3 = styled.div`
    grid-area: 3 / 1 / 3 / 1;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
`

const B3 = styled.div`
    grid-area: 3 / 2 / 3 / 2;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
`

const Humedad = () => {
  return (
    <A1>
      Humedad
    </A1>
  )
}

const UV = () => {
  return (
    <B1>
      UV
    </B1>
  )
}

const Viento = () => {
  return (
    <A2>
      Viento
    </A2>
  )
}

const Visibilidad = () => {
  return (
    <B2>
      Visibilidad
    </B2>
  )
}

const Amanecer = () => {
  return (
    <A3>
      Amanecer
    </A3>
  )
}

const Calidad = () => {
  return (
    <B3>
      Calidad
    </B3>
  )
}

const OtrosDatos = () => {
  return (
    <Otros>
      <Humedad/>
      <UV/>
      <Viento/>
      <Visibilidad/>
      <Amanecer/>
      <Calidad/>
    </Otros>
  )
}

export default OtrosDatos;