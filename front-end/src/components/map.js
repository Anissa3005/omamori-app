import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "../styles/map.css";

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet/dist/leaflet";
// import MarkerClusterGroup from "react-leaflet-markercluster";
import pin from "../img/pin.png";

export default function Map() {
  const [omamori, setOmamori] = useState([]);

  const customIcon = new Icon({
    iconUrl: pin,

    iconSize: [38, 38],
  });

  useEffect(() => {
    getOmamori();
  }, [omamori]);

  // useEffect(() => {
  //   console.log(omamori);
  // }, [omamori]);

  async function getOmamori() {
    const response = await fetch("https://omamori.onrender.com/omamori");
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
        {omamori.map((marker, index) => (
          <Marker
            position={[Number(marker.latitude), Number(marker.longitude)]}
            icon={customIcon}
            key={index}
          >
            <Popup>
              <div className="pop-up-container">
                <h2>Shrine Name</h2>
                <div className="omamori-img-container">
                  <img
                    className="omamori-img"
                    src={marker.img_url}
                    alt="omamori uploaded by a user"
                  ></img>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
