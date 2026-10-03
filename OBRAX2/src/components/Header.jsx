import React from 'react'

const Header = () => {
  return (
    <header className="pt-20 bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Reformas y construcción en Valencia</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Profesionales comprometidos con tu hogar
          </p>
          <a 
            href="#contacto" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300"
          >
            Solicita presupuesto
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header