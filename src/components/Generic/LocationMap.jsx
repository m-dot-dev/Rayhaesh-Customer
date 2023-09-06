import { Container, Stack, Text } from "@mantine/core";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const LocationMap = ({ lat, lng }) => {
  const ResizeMap = () => {
    const map = useMap();
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    // const container = document.getElementById("map-container");
    // resizeObserver.observe(container);

    return null;
  };
  return (
    <MapContainer
      style={{
        height: "100%",
        width: "100%",
      }}
      center={[lat, lng]}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          <Stack spacing={0}>
            <Text weight={700} align="center">
              Location <br />
            </Text>
            <Text>
              Lat: {lat} <br /> Lng: {lng}
            </Text>
          </Stack>
        </Popup>
      </Marker>
      <ResizeMap />
    </MapContainer>
  );
};

export default LocationMap;
