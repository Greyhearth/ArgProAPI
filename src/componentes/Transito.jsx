import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet';
import dataRutas from '../assets/rutasColectivosEstatico.json'
import nombreRuta from '../assets/routeIdaRouteShortName.json'

const Trans = styled.div`
    width:50%;
    min-height: 100vh;
    background: grey;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:1rem;
    @media (max-width: 768px) {
      width:100%;
  }
`

const Mensaje = styled.label`
  font-size: 1.5rem;
`

const Lineas = styled.select`
  margin-left: 10px;
`

const Transito = () => {
  const [dataTransporte, setDataTransporte] = useState([]);
  const [lineaElegida, setLineaElegida] = useState("238");
  // El URL que se usará el en fetch varía según el valor de "lineaElegida" para obtener sólo los colectivos de la linea deseada.
  const urlAPItransporte = `https://datosabiertos-transporte-apis.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${lineaElegida}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`
  // nombreLinea obtiene el valor correspondiente del diccionario "routeIdaRouteShortName.json" a partir del route_id seleccionado por el usuario. En el futuro debería obtener datos actualizados mediante un fetch.
  const nombreLinea = nombreRuta[lineaElegida];
  // urlIcono modifica la URL a usar por el ícono del marker, para que sea correspondiente a la linea elegida.
  const urlIcono = `https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea${nombreLinea}.jpg`
  // iconoLinea crea el icono dinámico para usar con "Marker", a partir de "urlIcono"
  const iconoLinea = new L.Icon({
    iconUrl: urlIcono,
    iconRetinaUrl: urlIcono,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],     
  });

    // Se usaron 2 useEffect, uno para actualizar tras cada cambio de "lineaElegida" y otro para hacerlo cada 31 segundos. En el futuro, espero lograrlo con uno sólo.
    // Llama de nuevo a la función "fetchAPITransporte" cada vez que cambia "lineaElegida" por la selección del usuario.
  useEffect(() => {
    fetchAPITransporte();
    // La siguiente linea de comentario evita el mensaje de advertencia, pero es intencional, ya que el useEffect sólo necesita cargarse cada vez que cambia "lineaElegida", no requiere otra dependencia.
    // eslint-disable-next-line
  }, [lineaElegida]);

    // Llama de nuevo a la función "fetchAPITransporte" cada 31 segundos (ya que la API actualiza su datos cada 30 segundos).
  useEffect(() => {
    // Fija un intervalo con un nombre.
    const intervalId = setInterval(() => {
      fetchAPITransporte();
    // Fija el intervalo en 31 segundos.
    }, 31000)
    // Al terminar, limpia el intervalo para reiniciarlo.
    return () => clearInterval(intervalId);
    // La siguiente linea de comentario evita el mensaje de advertencia, pero es intencional, ya que este useEffect sólo necesita cargarse cada vez que cambia "lineaElegida" o si se cumplen los 31 segundos.
    // eslint-disable-next-line
  }, [lineaElegida])

  // La función fetch que obtiene la información de los colectivos a partir de "urlAPItransporte" que varía según la opción elegida más abajo. En el futuro, debería estar en un archivo aparte.
  const fetchAPITransporte = async () => {
    try {
      const response = await fetch(urlAPItransporte);
      const result = await response.json();
      setDataTransporte(result);
    } catch (error) {
      console.error('Error al obtener la información de transporte:', error);
    }
  };

  return (
    <Trans>

      {/* El menu desplegable ofrece las opciones obtenidas de un archivo estático para evitar solicitar todas las lineas a la vez. */}
      <div>
        <Mensaje>
          Elija una linea de Colectivos:
          <Lineas
            name="lineaElegida"
            value={lineaElegida}
            onChange={(e)=>setLineaElegida(e.target.value)}
          >
            {dataRutas.map((linea) => {
              const routeId = linea.route_id
              const nombre = linea.route_short_name+" "+linea.trip_headsign
              return (
               <option value={routeId}>{nombre}</option>
               )
            })}
          </Lineas>
        </Mensaje>
      </div>

      {/* el mapa esta centrado en las coordenadas de CABA. */}
      <MapContainer center={[-34.609, -58.451]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* en base al json obtenido, mediante ".map" crea un marcador con la posición actual de todos los colestivos de la linea obtenida. */}
        {dataTransporte.map((pos,index) => {
          const position = [pos.latitude, pos.longitude];
          return (
            <Marker 
              key={index} 
              position={position}
              icon={ iconoLinea }
              >
            </Marker>
          )
        })}

      </MapContainer>

    </Trans>
  )
}

export default Transito