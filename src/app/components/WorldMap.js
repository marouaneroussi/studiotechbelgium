"use client";
import React, { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { offices } from "../../lib/officesData";

export default function WorldMap({ activeRegion = "All" }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  maptilersdk.config.apiKey = "ofyGJyInivRPRJZQLJgx";

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style:
        "https://api.maptiler.com/maps/019a5df9-b9fa-7eea-b57a-b96c45443d36/?key=ofyGJyInivRPRJZQLJgx",
      center: [10, 20],
      zoom: 1,
      interactive: true,
    });

    // Disable scroll-to-zoom and rotation
    map.current.scrollZoom.disable();
    map.current.touchZoomRotate.disableRotation();
    map.current.setStyle(maptilersdk.MapStyle.STREETS.LIGHT);
    offices.forEach((office) => {
      if (
        (activeRegion === "All" || office.region === activeRegion) &&
        typeof office.lng === "number" &&
        typeof office.lat === "number"
      ) {
        const marker = new maptilersdk.Marker({ color: "red" })
          .setLngLat([office.lng, office.lat])
          .addTo(map.current);

        const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(`
          <div style="
            font-family: sans-serif;
            font-size: 13px;
            color: #111;
            background: #fff;
            padding: 6px 10px;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          ">
            <strong>${office.name}</strong><br/>
            <em>${office.city}, ${office.country}</em>
          </div>
        `);

        marker.setPopup(popup);
      }
    });
  }, [activeRegion]);

  return (
    <div className="flex justify-center my-10">
      <div
        ref={mapContainer}
        className="rounded-2xl shadow-lg border border-gray-200"
        style={{
          width: "90%",
          maxWidth: "1000px",
          height: "500px",
          overflow: "hidden",
        }}
      />
    </div>
  );
}


