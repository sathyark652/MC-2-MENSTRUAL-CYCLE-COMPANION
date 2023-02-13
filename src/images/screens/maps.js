import React, { useState } from "react";

const HospitalsFinder = () => {
  const [location, setLocation] = useState({
    lat: "",
    lng: ""
  });

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });

      const mapUrl = `https://www.google.com/maps/search/?api=1&query=hospitals&near=${location.lat},${location.lng}`;
      window.location.href = mapUrl;
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Find Hospitals</button>
    </div>
  );
};

export default HospitalsFinder