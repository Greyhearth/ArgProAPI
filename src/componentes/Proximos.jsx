import React from 'react'
import styled from 'styled-components';

const Term = styled.div`
    grid-area: 1 / 4 / 4 / 4;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`

const Proximos = () => {
  return (
    <Term>Proximos</Term>
  )
}

export default Proximos;