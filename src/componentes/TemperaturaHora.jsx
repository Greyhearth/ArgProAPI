import React from 'react'
import styled from 'styled-components';

const Hora = styled.div`
    grid-area: 4 / 1 / 4 / 5;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
`

const TemperaturaHora = () => {
  return (
    <Hora>TemperaturaHora</Hora>
  )
}

export default TemperaturaHora;