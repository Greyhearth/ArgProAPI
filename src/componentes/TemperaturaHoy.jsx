import React from 'react'
import styled from 'styled-components';

const Hoy = styled.div`
    grid-area: 1 / 2 / 1 / 5;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
`

const TemperaturaHoy = () => {
  return (
    <Hoy>
    Clima Hoy
    </Hoy>
  )
}

export default TemperaturaHoy;