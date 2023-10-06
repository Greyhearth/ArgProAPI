import React from 'react'
import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Hora = styled.div`
    grid-area: 4 / 1 / 4 / 5;
    height:100%;
    width:100%;
    background:linear-gradient(315deg, #adadad, white);
    border-radius: 10px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`

const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400}
];

const renderLineChart = (
  <LineChart width={850} height={160} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" margin={{ top: 5, right: 20, bottom: 5, left: 0 }}/>
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

const TemperaturaHora = () => {
  return (
    <Hora>
      {renderLineChart}
    </Hora>
  )
}

export default TemperaturaHora;