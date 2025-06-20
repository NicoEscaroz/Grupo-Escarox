import React from "react";
import logo from "../Assets/logoLimex2.png";

const Historia = () => {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #dbeafe 100%)' }}>
      <div className="container-max">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="font-heading" style={{
            fontSize: window.innerWidth >= 1024 ? '48px' : window.innerWidth >= 768 ? '40px' : '32px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '16px'
          }}>
            Nuestra Historia
          </h2>
          <div style={{
            width: '96px',
            height: '4px',
            background: '#2563eb',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Image Section */}
          <div>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
                borderRadius: '16px',
                transform: 'rotate(3deg) scale(1.05)',
                opacity: 0.2
              }}></div>
              <div className="card" style={{ position: 'relative', padding: '32px' }}>
                <img
                  src={logo}
                  alt="Grupo Escarox Logo"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="card" style={{ padding: '24px' }}>
                <h3 className="font-heading" style={{
                  fontSize: window.innerWidth >= 768 ? '24px' : '20px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '16px'
                }}>
                  Una Empresa Familiar
                </h3>
                <p style={{ color: '#6b7280', lineHeight: 1.7 }}>
                  Empresa familiar que nace en 1985 con la idea de su fundador, Don Luis
                  Alberto Escaroz Ortiz en dar servicio especializado a la comunidad en
                  tornillería y bandas.
                </p>
              </div>

              <div className="card" style={{ padding: '24px' }}>
                <h3 className="font-heading" style={{
                  fontSize: window.innerWidth >= 768 ? '24px' : '20px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '16px'
                }}>
                  Crecimiento y Expansión
                </h3>
                <p style={{ color: '#6b7280', lineHeight: 1.7 }}>
                  Con el tiempo surgen necesidades locales diferentes a las establecidas
                  y se agregan productos como rodamientos, resortes, materiales para
                  servicio terrestre pesado como abrazaderas para muelle y birlos sin
                  descuidar su enfoque, a la par, crece el nivel de atención al público.
                </p>
              </div>

              <div className="card" style={{ padding: '24px' }}>
                <h3 className="font-heading" style={{
                  fontSize: window.innerWidth >= 768 ? '24px' : '20px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '16px'
                }}>
                  Servicio Personalizado
                </h3>
                <p style={{ color: '#6b7280', lineHeight: 1.7 }}>
                  En Grupo Escarox contamos con un sistema de atención a clientes en
                  mostrador y personalizado en horario amplio, además, entrega a
                  domicilio para satisfacción de quienes nos prefieren.
                </p>
              </div>

              <div className="card" style={{
                padding: '24px',
                background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
                border: '1px solid #93c5fd'
              }}>
                <h3 className="font-heading" style={{
                  fontSize: window.innerWidth >= 768 ? '24px' : '20px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '16px'
                }}>
                  Liderazgo Regional
                </h3>
                <p style={{ color: '#6b7280', lineHeight: 1.7 }}>
                  A través de los años, nos hemos distinguido por ser una empresa con
                  influencia regional que ha llevado un ritmo de vanguardia y liderazgo
                  en la comercialización de tornillería y accesorios automotrices e
                  industriales, sembrando día a día la confianza en nuestros clientes
                  con el deseo creciente de servirles.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div style={{ marginTop: '48px' }}>
              <h4 className="font-heading" style={{
                fontSize: window.innerWidth >= 768 ? '20px' : '18px',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '24px'
              }}>
                Nuestra Trayectoria
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#2563eb',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>
                    85
                  </div>
                  <div>
                    <h5 style={{ fontWeight: '600', color: '#1f2937' }}>Fundación</h5>
                    <p style={{ fontSize: '14px', color: '#6b7280' }}>Nacimiento de la empresa</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#2563eb',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>
                    91
                  </div>
                  <div>
                    <h5 style={{ fontWeight: '600', color: '#1f2937' }}>Expansión</h5>
                    <p style={{ fontSize: '14px', color: '#6b7280' }}>Ampliación de productos</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#2563eb',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>
                    24
                  </div>
                  <div>
                    <h5 style={{ fontWeight: '600', color: '#1f2937' }}>Presente</h5>
                    <p style={{ fontSize: '14px', color: '#6b7280' }}>Líderes en la región</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
