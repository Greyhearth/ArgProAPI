import React from 'react'
import styled from 'styled-components'
import Termometro from './Termometro'
import TemperaturaHoy from './TemperaturaHoy'
import OtrosDatos from './OtrosDatos'
import TemperaturaHora from './TemperaturaHora'

const Clim = styled.div`
    width:50%;
    min-height: 100vh;
    background: linear-gradient(315deg, rgb(118, 201, 255), rgb(247, 255, 222));
    color: black;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1.5rem;
    padding:1rem;
    place-items: center;
`

const Clima = () => {
  return (
    <Clim>
      <Termometro/>
      <TemperaturaHoy/>
      <OtrosDatos/>
      <TemperaturaHora/>
    </Clim>
  )
}

export default Clima