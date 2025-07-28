import React from "react";

const Nosotros = () => {
  const values = [
    {
      title: "COLABORACIÓN",
      description: "Ofrecer al cliente una solución a su necesidad o una alternativa en atención a su preferencia."
    },
    {
      title: "UNIDAD",
      description: "Se trabaja en equipo porque creemos en la complacencia al cliente."
    },
    {
      title: "INTEGRIDAD",
      description: "Actuamos con honestidad, integridad y respeto hacia todas las personas y organizaciones con las que interactuamos."
    },
    {
      title: "CONFIANZA",
      description: "Generar en el cliente un respaldo para su negocio."
    }
  ];

  const visionGoals = [
    "Proveedor de un servicio preferido de sus clientes.",
    "Una empresa innovadora, que mira hacia el futuro.",
    "Una empresa financieramente sólida.",
    "Un lugar extraordinario para trabajar."
  ];

  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <div className="container-max">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="font-heading" style={{
            fontSize: window.innerWidth >= 1024 ? '48px' : window.innerWidth >= 768 ? '40px' : '32px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '16px'
          }}>
            Nuestra Identidad
          </h2>
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
            Con más de 40 años de experiencia, hemos construido nuestra identidad basada en valores sólidos y un compromiso inquebrantable con nuestros clientes.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(3, 1fr)' : '1fr',
          gap: '32px'
        }}>
          {/* Misión */}
          <div className="card" style={{ padding: '24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3 className="font-heading" style={{
                fontSize: window.innerWidth >= 768 ? '24px' : '20px',
                fontWeight: 'bold',
                color: '#1f2937'
              }}>
                Misión
              </h3>
            </div>
            <p style={{ color: '#6b7280', lineHeight: 1.7, textAlign: 'center' }}>
              Satisfacer las necesidades de nuestros clientes en todos sus
              niveles de trabajo, garantizando el mejor servicio, influyendo de
              manera positiva en la industria y el progreso de nuestra
              comunidad.
            </p>
          </div>

          {/* Valores */}
          <div className="card" style={{ padding: '24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'rgba(34, 197, 94, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3 className="font-heading" style={{
                fontSize: window.innerWidth >= 768 ? '24px' : '20px',
                fontWeight: 'bold',
                color: '#1f2937'
              }}>
                Valores
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {values.map((value, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '4px'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '600', color: '#1f2937', fontSize: '14px' }}>
                      {value.title}:
                    </h4>
                    <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6 }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visión */}
          <div className="card" style={{ padding: '24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'rgba(147, 51, 234, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="font-heading" style={{
                fontSize: window.innerWidth >= 768 ? '24px' : '20px',
                fontWeight: 'bold',
                color: '#1f2937'
              }}>
                Visión
              </h3>
            </div>
            <p style={{ color: '#6b7280', lineHeight: 1.7, textAlign: 'center', marginBottom: '24px' }}>
              Ser una empresa con productos clave y servicio confiable para sus
              consumidores, así mismo, crecer a nivel regional con productos
              competitivos.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontWeight: '600', color: '#1f2937', textAlign: 'center', marginBottom: '16px' }}>
                Grupo Escarox busca ser:
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {visionGoals.map((goal, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: '#2563eb',
                      borderRadius: '50%',
                      marginTop: '8px',
                      flexShrink: 0
                    }}></div>
                    <span style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6 }}>
                      {goal}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
