import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Recreo() {
  return (
    <>
      <Header currentPage="Recreo" />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100">
        {/* Breadcrumb */}
        <nav className="w-full max-w-2xl mt-8 mb-4 px-4">
          <ol className="flex items-center gap-2 text-gray-500 text-sm md:text-base">
            <li>
              <Link to="/" className="hover:underline hover:text-blue-700 font-semibold">Inicio</Link>
            </li>
            <li className="mx-1">/</li>
            <li className="font-bold text-gray-700">Recreo</li>
          </ol>
        </nav>
        <h1 className="text-5xl font-bold text-blue-700 mb-6">¡Bienvenido al Recreo!</h1>
        <p className="text-xl text-gray-700 mb-8">Esta es una página de práctica para experimentar con React.</p>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <span className="text-2xl mb-4">😎🎉</span>
          <p className="text-lg text-gray-600">¡Puedes modificar esta página para probar componentes, hooks, animaciones y más!</p>
        </div>
      </div>
    </>
  );
}

export default Recreo;
