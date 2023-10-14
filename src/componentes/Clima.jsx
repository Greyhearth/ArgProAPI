import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Proximos from './Proximos'
import TemperaturaHoy from './TemperaturaHoy'
import OtrosDatos from './OtrosDatos'
import TemperaturaHora from './TemperaturaHora'
// import dataClima from './API-Clima.json'
import weatherCodeDef from './weathercode.json'
import API from './API'

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
    @media (max-width: 768px) {
      width:100%;
  }
`

const Clima = () => {
  const [dataClima,setDataClima] = useState(null)
  const [dataCalidad,setDataCalidad] = useState(null)
  const [error,setError] = useState(null)
  const [cargando,setCargando] = useState(true)

  useEffect(() => {
    API(setDataClima,setError,setCargando,setDataCalidad)
  }, [])
  
    // Usados para debuggear los .json captados por la API.jsx y ver posibles errores.
    // console.log(dataClima);
    // console.log(dataCalidad);
    // console.log(error);
    // console.log(cargando);

  return (
    <>
      {cargando && <>Cargando datos del clima...</>}
      {error && <>Hubo un error: {error}</>}
      {dataClima &&
        <Clim>
          <TemperaturaHoy 
            tempAct={dataClima.current.temperature_2m} 
            tempMax={dataClima.daily.temperature_2m_max[0]} 
            tempMin={dataClima.daily.temperature_2m_min[0]} 
            weatherCode={dataClima.current.weathercode} 
            weatherCodeDef={weatherCodeDef[dataClima.current.weathercode]}
          />
          <OtrosDatos 
            humed={dataClima.hourly.relativehumidity_2m[0]} 
            vientoV={dataClima.current.windspeed_10m} 
            vientoD={dataClima.current.winddirection_10m} 
            uvInd={dataClima.hourly.uv_index[0]} 
            amanec={dataClima.daily.sunrise[0].slice(11,16)} 
            anoch={dataClima.daily.sunset[0].slice(11,16)} 
            visib={dataClima.hourly.visibility[0]/1000} 
            calid={dataCalidad.current.european_aqi}
          />
          <Proximos 
            icon={dataClima.daily.weathercode} 
            max={dataClima.daily.temperature_2m_max} 
            min={dataClima.daily.temperature_2m_min}
          />
          <TemperaturaHora 
            tempHora={dataClima.hourly.temperature_2m} 
            horaT={dataClima.hourly.time}
          />
        </Clim>
      }
    </>
  )
}

export default Clima