import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer 
      id="Contacto" 
      style={{
        background: 'linear-gradient(135deg, #1f2937 0%, #1e3a8a 100%)',
        color: 'white'
      }}
    >
      <div className="container-max" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="font-heading" style={{
            fontSize: window.innerWidth >= 1024 ? '48px' : window.innerWidth >= 768 ? '40px' : '32px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Contáctanos
          </h2>
          <div style={{
            width: '96px',
            height: '4px',
            background: '#60a5fa',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
          <p style={{
            color: '#d1d5db',
            marginTop: '24px',
            maxWidth: '512px',
            margin: '24px auto 0'
          }}>
            Estamos aquí para ayudarte. Visítanos o contáctanos para cualquier consulta sobre nuestros productos.
          </p>
        </div>

        {/* Map Section */}
        <div style={{ marginBottom: '64px' }}>
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14,2 14,8 20,8"/>
                </svg>
                <h3 className="font-heading" style={{
                  fontSize: window.innerWidth >= 768 ? '20px' : '18px',
                  fontWeight: 'bold'
                }}>
                  Nuestra Ubicación
                </h3>
              </div>
              <iframe
                style={{
                  width: '100%',
                  height: '384px',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  border: 'none'
                }}
                title="Grupo Escarox Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.3590914592023!2d-116.60730772437445!3d31.869651274056054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88d86d11c0001%3A0x3da2049370ab3636!2sGRUPO%20ESCAROX%2C%20S%20DE%20RL%20DE%20CV!5e0!3m2!1ses!2smx!4v1699559275273!5m2!1ses!2smx"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(3, 1fr)' : '1fr',
          gap: '32px'
        }}>
          {/* Social Media */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '24px',
            textAlign: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#3b82f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaFacebookSquare style={{ width: '24px', height: '24px', color: 'white' }} />
              </div>
              <h3 className="font-heading" style={{
                fontSize: window.innerWidth >= 768 ? '20px' : '18px',
                fontWeight: 'bold'
              }}>
                Síguenos
              </h3>
            </div>
            <p style={{ color: '#d1d5db', marginBottom: '24px' }}>
              Mantente conectado con nosotros en redes sociales para las últimas novedades y ofertas.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <button
                style={{
                  width: '48px',
                  height: '48px',
                  background: '#1d4ed8',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/escarox/?locale=es_LA",
                    "_blank"
                  )
                }
                onMouseEnter={(e) => {
                  e.target.style.background = '#1e40af';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#1d4ed8';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <FaFacebookSquare size={24} />
              </button>
              <button
                style={{
                  width: '48px',
                  height: '48px',
                  background: '#ec4899',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/escarox/?hl=es-la",
                    "_blank"
                  )
                }
                onMouseEnter={(e) => {
                  e.target.style.background = '#db2777';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ec4899';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <FaInstagram size={24} />
              </button>
              <button
                style={{
                  width: '48px',
                  height: '48px',
                  background: '#059669',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => window.open("https://wa.me/526461854410")}
                onMouseEnter={(e) => {
                  e.target.style.background = '#047857';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#059669';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <FaWhatsappSquare size={24} />
              </button>
            </div>
          </div>

          {/* Schedule */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '24px',
            textAlign: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#10b981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <h3 className="font-heading" style={{
                fontSize: window.innerWidth >= 768 ? '20px' : '18px',
                fontWeight: 'bold'
              }}>
                Horario
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '16px'
              }}>
                <p style={{ fontWeight: '600', color: '#93c5fd' }}>Lunes a Viernes</p>
                <p style={{ color: '#d1d5db' }}>8:00 a.m. - 5:30 p.m.</p>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '16px'
              }}>
                <p style={{ fontWeight: '600', color: '#93c5fd' }}>Sábados</p>
                <p style={{ color: '#d1d5db' }}>8:00 a.m. - 2:00 p.m.</p>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '16px'
              }}>
                <p style={{ fontWeight: '600', color: '#fca5a5' }}>Domingos</p>
                <p style={{ color: '#d1d5db' }}>Cerrado</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '24px',
            textAlign: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#8b5cf6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3 className="font-heading" style={{
                fontSize: window.innerWidth >= 768 ? '20px' : '18px',
                fontWeight: 'bold'
              }}>
                Contacto
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '16px'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontWeight: '600', color: '#93c5fd' }}>Dirección</p>
                  <p style={{ color: '#d1d5db', fontSize: '14px' }}>Calle once #900-C 22830</p>
                  <p style={{ color: '#d1d5db', fontSize: '14px' }}>Ensenada, Baja California</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '16px'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontWeight: '600', color: '#93c5fd' }}>Email</p>
                  <a 
                    href="mailto:grupoescarox@gmail.com" 
                    style={{
                      color: '#d1d5db',
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                  >
                    grupoescarox@gmail.com
                  </a>
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '16px'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontWeight: '600', color: '#93c5fd' }}>Teléfono</p>
                  <a 
                    href="tel:+526461854410" 
                    style={{
                      color: '#d1d5db',
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                  >
                    (646) 185 44 10
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          marginTop: '64px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          textAlign: 'center'
        }}>
          <p style={{ color: '#9ca3af' }}>
            © 2024 Grupo Escarox. Todos los derechos reservados. | 
            <span style={{ color: '#60a5fa' }}> Desde 1985 sirviendo a la comunidad</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
