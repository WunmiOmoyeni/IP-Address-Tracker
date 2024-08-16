import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import location from '../assets/images/icon-location.svg'

export default function MapComponent({ lat, lng }) {
  useEffect(() => {
    const map = L.map("map").setView([lat, lng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const customIcon = L.icon({
        iconUrl: location,
        iconSize: [40, 50], // Size of the icon
        iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -40] // Point from which the popup should open relative to the iconAnchor
      });

    L.marker([lat, lng], {icon: customIcon}).addTo(map)
      .bindPopup("You are here.")
      .openPopup();

    return () => {
      map.remove();
    };
  }, [lat, lng]);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
}
