import React from "react";
import TypedText from "../utils/TypedText";

const GrupoEscarox = ({ Inicio }) => {
  return (
    <section
      id="Inicio"
      ref={Inicio}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(30, 64, 175, 0.1) 100%)'
      }}
    >
      {/* Animated background elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '-160px',
          right: '-160px',
          width: '320px',
          height: '320px',
          background: 'rgba(59, 130, 246, 0.2)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-160px',
          left: '-160px',
          width: '320px',
          height: '320px',
          background: 'rgba(147, 51, 234, 0.2)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 4s ease-in-out infinite 2s'
        }}></div>
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 16px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 16px',
            borderRadius: '9999px',
            background: 'rgba(59, 130, 246, 0.1)',
            color: '#1e40af',
            fontWeight: '600',
            fontSize: '14px',
            marginBottom: '32px'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              background: '#2563eb',
              borderRadius: '50%',
              marginRight: '8px',
              animation: 'pulse 2s ease-in-out infinite'
            }}></span>
            DESDE 1985
          </div>

          {/* Main heading */}
          <h1 className="font-heading" style={{
            fontSize: window.innerWidth >= 1024 ? '72px' : window.innerWidth >= 768 ? '60px' : '48px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '32px',
            lineHeight: '1.1'
          }}>
            Servicio para su{" "}
            <span style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              empresa
            </span>
          </h1>

          {/* Typed text */}
          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: window.innerWidth >= 768 ? '16px' : '16px',
            marginBottom: '48px'
          }}>
            <p style={{
              fontSize: window.innerWidth >= 768 ? '20px' : '18px',
              fontWeight: '500',
              color: '#6b7280'
            }}>
              Contamos con diferentes tipos de productos como
            </p>
            <div style={{
              fontSize: window.innerWidth >= 768 ? '20px' : '18px',
              fontWeight: 'bold',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
              marginLeft: '-9px'
            }}>
              <TypedText
                strings={[
                  "tornillos.",
                  "bandas.",
                  "resortes.",
                  "abrazaderas.",
                  "rodamientos.",
                  "herramientas."
                ]}
                typeSpeed={120}
                backSpeed={80}
                loop
              />
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(3, 1fr)' : '1fr',
            gap: '32px',
            marginTop: '64px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: window.innerWidth >= 768 ? '48px' : '36px', fontWeight: 'bold', color: '#2563eb', marginBottom: '8px' }}>40+</div>
              <div style={{ color: '#6b7280', fontWeight: '500' }}>Años de Experiencia</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: window.innerWidth >= 768 ? '48px' : '36px', fontWeight: 'bold', color: '#2563eb', marginBottom: '8px' }}>1000+</div>
              <div style={{ color: '#6b7280', fontWeight: '500' }}>Clientes Satisfechos</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: window.innerWidth >= 768 ? '48px' : '36px', fontWeight: 'bold', color: '#2563eb', marginBottom: '8px' }}>500+</div>
              <div style={{ color: '#6b7280', fontWeight: '500' }}>Productos Disponibles</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite'
      }}>
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid #9ca3af',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '4px',
            height: '12px',
            background: '#9ca3af',
            borderRadius: '2px',
            marginTop: '8px',
            animation: 'pulse 1s ease-in-out infinite'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default GrupoEscarox;
