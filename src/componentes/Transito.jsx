import React from 'react'
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Trans = styled.div`
    width:50%;
    min-height: 100vh;
    @media (max-width: 768px) {
      width:100%;
  }
`

const MapC = styled.div`
    height: 180px;
`

const Transito = () => {
  return (
    <Trans>
       <MapC id="map">
        <MapContainer center={[-34.609, -58.451]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-34.609, -58.451]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
       </MapC>
    </Trans>
  )
}

export default Transito