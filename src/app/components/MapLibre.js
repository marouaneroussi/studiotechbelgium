"use client";

import React, { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const MapLibre = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const center = { lng: 4.4076, lat: 50.8823 }; // 📍 Studiotech Belgium
  const zoom = 14;

  maptilersdk.config.apiKey = "ofyGJyInivRPRJZQLJgx";

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.BASIC, // ✅ Clean modern style
      center: [center.lng, center.lat],
      zoom,
      interactive: false,
    });

    // ✅ Marker
    new maptilersdk.Marker({ color: "red" })
      .setLngLat([center.lng, center.lat])
      .addTo(map.current);

    // ✅ Cleanup when component unmounts
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default MapLibre;
