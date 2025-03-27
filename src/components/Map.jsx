import React from "react";

function MapComponent() {
  return (
    <div className="h-[60vh] overflow-hidden">
      <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.879580295482!2d-105.2268797!3d20.6527658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8421455d0f0f0f0f%3A0x0!2zMjDCsDM5JzEwLjkiTiAxMDXCsDEzJzM2LjciVw!5e0!3m2!1sen!2sus!4v1697040000001!5m2!1sen!2sus"
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
