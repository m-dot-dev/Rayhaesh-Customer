import { Container, Stack, Text } from '@mantine/core'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const LocationMap = ({ lat, lng }) => {
  return (
    <>
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: '400px',
          width: '100%',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            <Stack spacing={0}>
              <Text weight={700}>
                Location: <br />
              </Text>
              <Text>
                Lat: {lat} <br /> Lng: {lng}
              </Text>
            </Stack>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default LocationMap
