import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "../styles/map.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet/dist/leaflet";

export default function Map() {
  const [omamori, setOmamori] = useState([]);

  const customIcon = new Icon({
    iconUrl:
      "https://img.freepik.com/premium-vector/red-pin-point-isolated-white-background_120819-360.jpg?w=826",
    iconSize: [38, 38],
  });

  useEffect(() => {
    getOmamori();
  }, [omamori]);

  // useEffect(() => {
  //   console.log([Number(omamori[0].latitude), Number(omamori[0].longitude)]);
  // }, []);

  async function getOmamori() {
    const response = await fetch("http://localhost:8080/omamori");
    const data = await response.json();
    setOmamori(data);
  }

  return (
    <div>
      <MapContainer center={[35.652832, 139.839478]} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {omamori.map((marker) => (
          <Marker
            position={[Number(marker.latitude), Number(marker.longitude)]}
            icon={customIcon}
          ></Marker>
        ))}
      </MapContainer>
    </div>
  );
}
