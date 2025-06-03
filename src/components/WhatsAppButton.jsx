import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../utils/whatsapp';

function WhatsAppButton() {

    return (
        <button
            onClick={() => openWhatsApp()}
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
            <FaWhatsapp className="w-6 h-6" />
        </button>
    );
}

export default WhatsAppButton;