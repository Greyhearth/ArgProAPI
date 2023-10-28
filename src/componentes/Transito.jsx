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

  // Llama de nuevo a la función "fetchAPITransporte" cada vez que cambia "lineaElegida" por la selección del usuario.
  useEffect(() => {
    fetchAPITransporte();
    // La siguiente linea de comentario evita el mensaje de advertencia, pero es intencional, ya que el useEffect sólo necesita cargarse cada vez que cambia "lineaElegida", no requiere otra dependencia.
    // eslint-disable-next-line
  }, [lineaElegida]);

  // useEffect(() => {
  //   setInterval(()=>{
  //     fetchAPITransporte()
  //   },31000);
  // });

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
        <label>
          Elija la linea:
          <select
            name="selectedFruit"
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
          </select>
        </label>
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