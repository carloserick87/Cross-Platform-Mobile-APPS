export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Nexus Books</h2>
          <p className="text-sm leading-relaxed">
            Tu librería online favorita. Encuentra los mejores títulos de literatura, ciencia y tecnología con solo un clic.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Explorar</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-400 transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Categorías</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Nuevos lanzamientos</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Contacto</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Ayuda</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-400 transition-colors">Preguntas frecuentes</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Envíos y devoluciones</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Política de privacidad</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 ">Síguenos</h3>
          <div className="flex ">
            <a href="#" className="hover:text-amber-400 transition-colors text-3xl w-10" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors text-3xl w-10" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors text-3xl w-10" aria-label="X (Twitter)">
              <i className="fab fa-x-twitter"></i>
            </a>

          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        <p>© {new Date().getFullYear()} Nexus Books. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
