import React from 'react'
import styled from 'styled-components'
import Proximos from './Proximos'
import TemperaturaHoy from './TemperaturaHoy'
import OtrosDatos from './OtrosDatos'
import TemperaturaHora from './TemperaturaHora'
import dataClima from './API-Clima.json'

const Clim = styled.div`
    width:50%;
    min-height: 100vh;
    background: linear-gradient(315deg, rgb(118, 201, 255), rgb(247, 255, 222));
    color: black;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1.9rem;
    padding:2rem;
    place-items: center;
`

const Clima = () => {
  const tempAct = dataClima.current_weather.temperature
  const tempMax = dataClima.daily.temperature_2m_max[0]
  const tempMin = dataClima.daily.temperature_2m_min[0]
  const humed = dataClima.hourly.relativehumidity_2m[0]
  const lluv = dataClima.hourly.precipitation_probability[75]
  const uvInd = dataClima.hourly.uv_index[25]
  const vientoV = dataClima.current_weather.windspeed
  const vientoD = dataClima.current_weather.winddirection
  const amanec = (dataClima.daily.sunrise[0]).slice(11,16)
  const anoch = dataClima.daily.sunset[0].slice(11,16)
  const visib = dataClima.hourly.visibility[0]
  const calid = dataClima.hourly.european_aqi[0]
  const weathercode = dataClima.current_weather.weathercode

  return (
    <Clim>
      <Proximos/>
      <TemperaturaHoy tempAct={tempAct} tempMax={tempMax} tempMin={tempMin} lluv={lluv} weathercode={weathercode}/>
      <OtrosDatos humed={humed} vientoV={vientoV} vientoD={vientoD} uvInd={uvInd} amanec={amanec} anoch={anoch} visib={visib} calid={calid}/>
      <TemperaturaHora/>
    </Clim>
  )
}

export default Clima