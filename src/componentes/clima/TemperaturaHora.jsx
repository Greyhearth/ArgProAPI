import React from 'react'
import styled from 'styled-components';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Hora = styled.div`
    grid-area: 4 / 1 / 4 / 5;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    display:flex;
    flex-direction:column;
    justify-content: center;
`

const TempHora = styled.p`
    font-size: 1rem;
`

const TemperaturaHora = ({tempHora,horaT}) => {
    // Al componente le llega 2 arrays con los datos por hora de la temperatura y sus horarios.
    // 'data' se construye obteniendo un valor del array 'tempHora', y asociandolo con el correspondiente del array 'horaT' en posición 'i'.
    // Al elemento de 'horaT' en posición 'i' se le aplica '.splice()' para que sólo muestre el valor de la hora.
   const data = tempHora.map ((temp,i)=> {
    return (
      {name: horaT[i].slice(11,13) + "hs", Temp: temp}
    )});

  const graficoTemp = (
    <ResponsiveContainer width="95%" height="80%">
      <AreaChart width={850} height={160} margin={{ top: 5, left: 0, right: 0, bottom: 0 }}  data={data}>
        <defs>
          <linearGradient id="tempHora" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#dbee72" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#dbee72" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="Temp" stroke="#c4c72e" fillOpacity={1} fill="url(#tempHora)" />
        <XAxis dataKey="name" tick={{fontSize: 15}} interval={1} />
        <YAxis width={40} tick={{fontSize: 15}}/>
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );

  return (
    <Hora>
      <TempHora>Temperatura por Hora</TempHora>
      {graficoTemp}
    </Hora>
  )
}

export default TemperaturaHora;