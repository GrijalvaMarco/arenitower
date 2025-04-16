import React from "react";

function MapComponent() {
  return (
    <div className="h-[60vh] overflow-hidden">
      <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1495.3551921630406!2d-105.24070329655086!3d20.65349186190038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842145991f10693d%3A0x4e7447552ea961bc!2sAv.%20Francisco%20Medina%20Ascencio%202860%2C%20Zona%20Hotelera%20Nte.%2C%2048314%20Puerto%20Vallarta%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1744834041680!5m2!1ses-419!2smx"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MapComponent;
