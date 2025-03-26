import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
    const phoneNumber = "1234567890";
    const message = "Hello, I would like to know more about your services.";

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
            <FaWhatsapp className="w-6 h-6" />
        </button>
    );
}

export default WhatsAppButton;