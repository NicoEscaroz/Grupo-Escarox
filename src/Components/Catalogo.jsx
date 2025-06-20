import React, { useEffect } from "react";
import catalogo from "../Assets/Grupo_Escarox_Catálogo_2024.pdf";
import logo from "../Assets/logoLimex2.png";

const Catalogo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const products = [
    {
      title: "Tornillería en general",
      description: "Hexagonal Grado 2, 5 y 8. Allen. Acero inoxidable."
    },
    {
      title: "Bandas",
      description: "Automotrices, servicio pesado e industrial."
    },
    {
      title: "Resortes",
      description: "Extensión, compresión, acero inoxidable."
    },
    {
      title: "Abrazaderas para muelle",
      description: "Solución para servicio terrestre pesado."
    },
    {
      title: "Baleros, retenes y chumaceras",
      description: "Componentes de alta calidad para maquinaria."
    },
    {
      title: "Sprockets y cadena de rodillos",
      description: "Sistemas de transmisión confiables."
    },
    {
      title: "Pegamentos industriales",
      description: "Soluciones de unión especializadas."
    },
    {
      title: "Rodajas y ruedas",
      description: "Movilidad y transporte eficiente."
    },
    {
      title: "Abrasivos",
      description: "Herramientas de acabado profesional."
    },
    {
      title: "Accesorios industriales",
      description: "Brochas, pintura en spray, silicones, desarmadores, grasa."
    }
  ];

  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #f9fafb 0%, #dbeafe 100%)',
      minHeight: '100vh',
      paddingTop: '120px' // Add extra padding for navbar
    }}>
      <div className="container-max">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 className="font-heading" style={{
            fontSize: window.innerWidth >= 1024 ? '48px' : window.innerWidth >= 768 ? '40px' : '32px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '16px'
          }}>
            Nuestro Catálogo
          </h1>
          <div style={{
            width: '96px',
            height: '4px',
            background: '#2563eb',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
          <p style={{
            color: '#6b7280',
            marginTop: '24px',
            maxWidth: '512px',
            margin: '24px auto 0'
          }}>
            Descubre nuestra amplia gama de productos industriales y automotrices de la más alta calidad.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr',
          gap: '48px',
          alignItems: 'flex-start'
        }}>
          {/* Logo and Info */}
          <div>
            <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ position: 'relative', marginBottom: '32px' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
                  borderRadius: '16px',
                  transform: 'rotate(3deg) scale(1.05)',
                  opacity: 0.2
                }}></div>
                <div style={{
                  position: 'relative',
                  background: 'white',
                  borderRadius: '16px',
                  padding: '32px'
                }}>
                  <img
                    src={logo}
                    alt="Grupo Escarox Logo"
                    style={{ width: '100%', maxWidth: '300px', margin: '0 auto', objectFit: 'contain' }}
                  />
                </div>
              </div>
              
              <h2 className="font-heading" style={{
                fontSize: window.innerWidth >= 768 ? '24px' : '20px',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '16px'
              }}>
                Productos de Calidad
              </h2>
              <p style={{ color: '#6b7280', lineHeight: 1.7, marginBottom: '24px' }}>
                Ofrecemos una amplia variedad de productos industriales y automotrices 
                para satisfacer todas sus necesidades. Nuestro catálogo incluye desde 
                tornillería básica hasta componentes especializados.
              </p>

              {/* Download Section */}
              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #93c5fd'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                  <h3 className="font-heading" style={{
                    fontSize: window.innerWidth >= 768 ? '20px' : '18px',
                    fontWeight: 'bold',
                    color: '#1f2937'
                  }}>
                    Catálogo Completo 2024
                  </h3>
                </div>
                <p style={{ color: '#6b7280', marginBottom: '16px' }}>
                  Descarga nuestro catálogo completo con todos los productos disponibles.
                </p>
                <a
                  href={catalogo}
                  download="Grupo_Escarox_Catálogo_2024.pdf"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <span>Descargar Catálogo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div>
            <h3 className="font-heading" style={{
              fontSize: window.innerWidth >= 768 ? '24px' : '20px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '24px'
            }}>
              Nuestros Productos
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
              gap: '16px'
            }}>
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="card"
                  style={{ padding: '16px', transition: 'all 0.3s ease' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '600', color: '#1f2937', fontSize: '14px', marginBottom: '4px' }}>
                        {product.title}
                      </h4>
                      <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: 1.6 }}>
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="card" style={{
              marginTop: '32px',
              padding: '24px',
              background: 'linear-gradient(135deg, #ecfdf5 0%, #dbeafe 100%)',
              border: '1px solid #10b981'
            }}>
              <h4 className="font-heading" style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '12px'
              }}>
                ¿Necesitas algo específico?
              </h4>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
                Si no encuentras lo que buscas en nuestro catálogo, contáctanos. 
                Tenemos acceso a una amplia red de proveedores y podemos conseguir 
                productos especializados según tus necesidades.
              </p>
              <button 
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  fontWeight: '600',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  transform: 'scale(1)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  e.target.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  e.target.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                }}
                onClick={() => {
                  window.open('https://wa.me/526461854410', '_blank');
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                Contactar Asesor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
