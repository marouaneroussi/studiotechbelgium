"use client"; // Ensure this is a client component
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import custom marker icon paths
const markerIcon = L.icon({
  iconUrl: "/images/marker.png", // Ensure this path matches the location of your icon in the public directory
  shadowUrl: "/images/marker_shadow.png", // Ensure this path matches the location of your shadow icon in the public directory
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  shadowSize: [41, 41], // Size of the shadow
});

const MapComponent = () => {
  useEffect(() => {
    // Ensure Leaflet initializes only on the client-side
    const map = L.map("map").setView([50.8503, 4.3517], 13); // Coordinates for Brussels, Belgium

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Create a marker with the custom icon at the specified coordinates
    const marker = L.marker([50.8503, 4.3517], { icon: markerIcon }).addTo(map); // Correct coordinates for the marker
    marker
      .bindPopup("<b>StudioTech Belgium</b><br>Brussels, Belgium")
      .openPopup();

    return () => {
      map.remove(); // Cleanup the map on component unmount
    };
  }, []);

  return (
    <div className="map-section">
      <div className="map-container">
        <div id="map" style={{ height: "500px", width: "100%" }}></div>
        <div className="location-info">
          <h2>Our Global Presence</h2>
          <p>Headquartered in Media City with offices worldwide</p>
          <div className="location-details">
            <div className="location-item">
              <svg className="location-icon" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <div>
                <h3>StudioTech Belgium</h3>
                <p>
                  Houtweg 7,
                  <br />
                  1130 Bruxelles, Belgium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
