// src/components/ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onButtonClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, buttonText, onButtonClick }) => {
  return (
    <div className="bg-[#f2f2f2] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"> {/* Fondo blanco para la tarjeta */}
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#333333]">{title}</h3> {/* Texto en gris oscuro */}
        <p className="text-[#333333] mt-2">{description}</p> {/* Texto en gris oscuro */}
        <button
          onClick={onButtonClick}
          className="mt-4 bg-[#8dbd3e] text-white px-4 py-2 rounded-md hover:bg-[#6f9e2a] transition"
        >
          {buttonText}
        </button> {/* Botón con verde lima y verde más oscuro al hacer hover */}
      </div>
    </div>
  );
};

export default ServiceCard;
