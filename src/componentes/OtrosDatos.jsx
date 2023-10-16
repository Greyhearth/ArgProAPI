import React from 'react'
import styled from 'styled-components'

  // Otros tiene "display: flex" con "flex-dirección" default en "row"
const Otros = styled.div`
    grid-area: 2 / 1 / 4 / 4;
    height:100%;
    width:100%;
    display: flex;
`
  // Sección A y B actúan como columnas en pantallas anchas, pero permiten verse como filas en pantallas angostas.
const SeccionA = styled.div`
    height:100%;
    width:50%;
    display: flex;
    flex-direction: column;
    padding:0.5rem;
`
const SeccionB = styled.div`
    height:100%;
    width:50%;
    display: flex;
    flex-direction: column;
    padding:0.5rem;
`
  // El formato de cada rectángulo que muestra un dato.
const Dato = styled.div`
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    margin:0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
  // Determina el tamaño de fuente del título de cada rectángulo.
const Titulo = styled.p`
    font-size: 1.5rem;
`
  // Determina el tamaño de fuente del valor de cada rectángulo.
const Valor = styled.p`
    font-size: 1.5rem;
`

const OtrosDatos = ({humed,vientoV,vientoD,uvInd,amanec,anoch,visib,calid}) => {
  return (
    <Otros>
  
      <SeccionA>
  
        <Dato>
          <Titulo>Amanece:</Titulo>
          <Valor>{amanec} hs</Valor>
        </Dato>

        <Dato>
          <Titulo>Anochece:</Titulo>
          <Valor>{anoch} hs</Valor>
        </Dato>

        <Dato>
          <Titulo>Humedad:</Titulo>
          <Valor>{humed}%</Valor>
        </Dato>

        <Dato>
          <Titulo>Indice UV:</Titulo>
          <Valor>{uvInd}</Valor>
        </Dato>

      </SeccionA>

      <SeccionB>

        <Dato>
          <Titulo>Velocidad del Viento:</Titulo>
          <Valor>{vientoV} km/h</Valor>
        </Dato>

        <Dato>
          <Titulo>Dirección del Viento:</Titulo>
          <Valor>{vientoD}°</Valor>
        </Dato>

        <Dato>
          <Titulo>Visibilidad:</Titulo>
          <Valor>{visib} km</Valor>
        </Dato>

        <Dato>
          <Titulo>Calidad del Aire:</Titulo>
          <Valor>{calid}</Valor>
        </Dato>

      </SeccionB>
  
    </Otros>
  )
}

export default OtrosDatos;