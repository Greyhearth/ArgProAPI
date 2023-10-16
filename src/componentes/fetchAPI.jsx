export default function API(setDataClima, setError, setCargando, setDataCalidad) {
  Promise.all([
      fetch("https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,weathercode,windspeed_10m,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,visibility,windspeed_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FSao_Paulo"),
      fetch("https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-31.4135&longitude=-64.181&current=european_aqi&timezone=America%2FSao_Paulo&forecast_days=1")
    ])
        .then(([respClima, respCalidad]) => 
        Promise.all([respClima.json(), respCalidad.json()])
      )
        .then(([infoClima, infoCalidad]) => {
          setDataClima(infoClima);
          setDataCalidad(infoCalidad);
          setError(null);
        })
        .catch(ex => {
          setError(ex.message);
          setDataClima(null);
        })
        .finally(() => {
          setCargando(false);
        })
}
