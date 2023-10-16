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
  const dataTemp = tempHora
  const dataHora = horaT

  const data = [
    {name: dataHora[0].slice(11,13)+"hs", Temp: dataTemp[0], pv: 240, amt: 240},
    {name: dataHora[2].slice(11,13)+"hs", Temp: dataTemp[2], pv: 240, amt: 240},
    {name: dataHora[4].slice(11,13)+"hs", Temp: dataTemp[4], pv: 240, amt: 240},
    {name: dataHora[6].slice(11,13)+"hs", Temp: dataTemp[6], pv: 240, amt: 240},
    {name: dataHora[8].slice(11,13)+"hs", Temp: dataTemp[8], pv: 240, amt: 240},
    {name: dataHora[10].slice(11,13)+"hs", Temp: dataTemp[10], pv: 240, amt: 240},
    {name: dataHora[12].slice(11,13)+"hs", Temp: dataTemp[12], pv: 240, amt: 240},
    {name: dataHora[14].slice(11,13)+"hs", Temp: dataTemp[14], pv: 240, amt: 240},
    {name: dataHora[16].slice(11,13)+"hs", Temp: dataTemp[16], pv: 240, amt: 240},
    {name: dataHora[18].slice(11,13)+"hs", Temp: dataTemp[18], pv: 240, amt: 240},
    {name: dataHora[20].slice(11,13)+"hs", Temp: dataTemp[20], pv: 240, amt: 240},
    {name: dataHora[22].slice(11,13)+"hs", Temp: dataTemp[22], pv: 240, amt: 240},
  ];
  
  const renderLineChart = (
    <ResponsiveContainer width="95%" height="80%">
      <AreaChart width={850} height={160} margin={{ top: 5, left: 0, right: 0, bottom: 0 }}  data={data}>
        <defs>
          <linearGradient id="tempHora" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#dbee72" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#dbee72" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="Temp" stroke="#c4c72e" fillOpacity={1} fill="url(#tempHora)" />
        <XAxis dataKey="name" tick={{fontSize: 15}}  />
        <YAxis width={40} tick={{fontSize: 15}}/>
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );

  return (
    <Hora>
      <TempHora>Temperatura por Hora</TempHora>
      {renderLineChart}
    </Hora>
  )
}

export default TemperaturaHora;