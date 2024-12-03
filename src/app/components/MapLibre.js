// src/components/MapLibre.js
"use client"; // Ensures this is a client component

import React, { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
const MapLibre = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const tokyo = { lng: 4.4076, lat: 50.8823 };
  const zoom = 14;
  maptilersdk.config.apiKey = "ofyGJyInivRPRJZQLJgx";

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=ofyGJyInivRPRJZQLJgx",
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom,
      interactive: false,
    });
    map.current.setStyle(maptilersdk.MapStyle.STREETS.LIGHT); // Change to dark style
    new maptilersdk.Marker({ color: "red" })
      .setLngLat([4.4076, 50.8823])
      .addTo(map.current);
  }, [tokyo.lng, tokyo.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default MapLibre;
