import './App.css';
import Logo from './assets/ComoEnCasa.svg'; // Importa el archivo SVG del logo

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 shadow-lg">
        <h1 className="text-2xl font-bold flex items-center justify-center">
          <img
            src={Logo} // Usamos el logo SVG importado
            alt="Logo"
            className="mr-2"
            width="40"
            height="40"
          />
          ¡Como en Casa!
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Buttons */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Botones</h2>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            Primario
          </button>
          <button className="bg-gray-700 text-gray-100 px-4 py-2 rounded-md ml-4 hover:bg-gray-600 transition">
            Secundario
          </button>
        </section>

        {/* Cards */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Tarjetas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Tarjeta 1</h3>
              <p>Descripción breve de esta tarjeta.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Tarjeta 2</h3>
              <p>Otra tarjeta con contenido diferente.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Tarjeta 3</h3>
              <p>Detalles adicionales de esta tarjeta.</p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Formulario</h2>
          <form className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-700 text-gray-100"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-700 text-gray-100"
                placeholder="Ingresa tu correo"
              />
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
              Enviar
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-100 py-4 text-center">
        <p>© 2025 Como en Casa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
