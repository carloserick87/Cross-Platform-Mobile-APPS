// Navbar

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-gray-700 hover:text-yellow-400 transition-colors duration-200 ${
      isActive ? "text-yellow-500 font-semibold" : ""
    }`;

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-end gap-2">
            <span className="text-2xl font-semibold text-gray-800">Nexus</span>
            <span className="text-2xl font-semibold text-yellow-500">Books</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" className={linkClass} end>
              Inicio
            </NavLink>
            <NavLink to="about" className={linkClass}>
              Sobre Nosotros
            </NavLink>
            <NavLink to="blog" className={linkClass}>
              Blog
            </NavLink>
            <NavLink to="events" className={linkClass}>
              Eventos
            </NavLink>
            <NavLink to="contact" className={linkClass}>
              Contacto
            </NavLink>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Search (Desktop) */}
            <div className="hidden sm:flex items-center border border-gray-200 rounded-md overflow-hidden">
              <input type="text" placeholder="Buscar..." aria-label="Buscar" className="px-3 py-2 w-48 focus:outline-none bg-transparent text-gray-700"/>
              <button className="px-3 py-2 border-l border-gray-200 hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>

            {/* Cart icon */}
            <button aria-label="Carrito" className="p-2 rounded-md hover:text-yellow-400">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>

            {/* CTA button */}
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-md text-white font-medium shadow-sm bg-amber-400 hover:bg-amber-300">
              Login
            </Link>


            {/* Mobile menu button */}
            <button aria-label="Open menu" className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-200">
          <div className="px-4 py-3">
            {/* Search (Mobile) */}
            <div className="flex items-center border border-gray-200 rounded-md overflow-hidden mb-3">
              <input type="text" placeholder="Buscar libros..." aria-label="Buscar libros" className="px-3 py-2 w-full focus:outline-none bg-transparent text-gray-700"/>
              <button className="px-3 py-2 border-l border-gray-200 hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col space-y-2 mb-4">
              {["/", "about", "blog", "events", "contact"].map((path, i) => {
                const labels = [
                  "Inicio",
                  "Sobre Nosotros",
                  "Blog",
                  "Eventos",
                  "Contacto",
                ];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => `text-gray-700 px-3 py-2 rounded-md transition-all duration-200 ${ isActive 
                         ? "bg-yellow-400 text-white font-semibold"
                          : "hover:bg-yellow-300 hover:text-white"
                      }`
                    }>
                    {labels[i]}
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA Button (Mobile) */}
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="inline-flex justify-center items-center w-full px-4 py-2 rounded-md text-white font-medium shadow-sm bg-amber-400 hover:bg-amber-300">
              Login
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
