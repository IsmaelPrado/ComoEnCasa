import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ComoEnCasa.svg"; // Importa tu logo
import ServiceCard from "../components/ServiceCard";

const Home: React.FC = () => {
  const handleButtonClick = () => {
    console.log("Botón de servicio presionado");
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#333333]"> {/* Fondo blanco y texto gris oscuro */}
      {/* Header */}
      <header className="w-full top-0 left-0 z-10 bg-[#333333] text-white p-4 shadow-lg"> {/* Fondo negro y texto blanco */}
        <h1 className="text-3xl font-bold flex items-center justify-center">
          <img
            src={Logo} // Ruta de tu logo
            alt="Logo"
            className="mr-2"
            width={40}
            height={40}
          />
          ¡Como en Casa!
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Introducción */}
        <section className="mb-8 text-center">
          <h2 className="text-xl font-semibold mb-4">
            Bienvenidos a Como en Casa
          </h2>
          <p className="text-lg mb-4">
            Disfruta de una experiencia única en nuestro sitio web. Explora
            nuestras opciones y contacta con nosotros.
          </p>
          <div className="space-x-4">
            <Link
              to="/about"
              className="bg-[#8dbd3e] text-white px-6 py-2 rounded-md hover:bg-[#6f9e2a] transition"
            >
              Saber más
            </Link>

            <Link
              to="/services"
              className="bg-[#e0e0e0] text-[#333333] px-6 py-2 rounded-md hover:bg-[#d0d0d0] transition"
            >
              Nuestros Servicios
            </Link>
          </div>
        </section>

        {/* Tarjetas */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Nuestros Servicios</h2>
          {/* Lista de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="Servicio 1"
              description="Descripción breve del servicio 1."
              imageUrl="https://via.placeholder.com/300x200"
              buttonText="Ver más"
              onButtonClick={handleButtonClick}
            />
            <ServiceCard
              title="Servicio 2"
              description="Descripción breve del servicio 2."
              imageUrl="https://via.placeholder.com/300x200"
              buttonText="Ver más"
              onButtonClick={handleButtonClick}
            />
            <ServiceCard
              title="Servicio 3"
              description="Descripción breve del servicio 3."
              imageUrl="https://via.placeholder.com/300x200"
              buttonText="Ver más"
              onButtonClick={handleButtonClick}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
