import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../Assets/logoLimex2.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const NavLink = ({ item }) => {
    const isHomePage = location.pathname === "/";
    const linkStyle = {
      color: '#374151',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      padding: '8px 12px',
      display: 'block',
      textDecoration: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    };

    const hoverStyle = {
      color: '#2563eb',
      backgroundColor: 'rgba(59, 130, 246, 0.1)'
    };

    if (item.to === "catalogo") {
      return (
        <RouterLink
          to="/catalogo"
          style={linkStyle}
          onClick={() => setIsOpen(false)}
          onMouseEnter={(e) => {
            e.target.style.color = hoverStyle.color;
            e.target.style.backgroundColor = hoverStyle.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = linkStyle.color;
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          {item.label}
        </RouterLink>
      );
    }

    if (isHomePage) {
      return (
        <ScrollLink
          to={item.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={linkStyle}
          onClick={() => setIsOpen(false)}
          onMouseEnter={(e) => {
            e.target.style.color = hoverStyle.color;
            e.target.style.backgroundColor = hoverStyle.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = linkStyle.color;
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          {item.label}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          to={`/#${item.to}`}
          style={linkStyle}
          onClick={() => setIsOpen(false)}
          onMouseEnter={(e) => {
            e.target.style.color = hoverStyle.color;
            e.target.style.backgroundColor = hoverStyle.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = linkStyle.color;
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          {item.label}
        </RouterLink>
      );
    }
  };

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: scrolled ? '1px solid #e5e7eb' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container-max">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          {/* Logo */}
          <RouterLink 
            to="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onClick={() => {
              // Always scroll to top when logo is clicked
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img 
              src={logo} 
              alt="Grupo Escarox" 
              style={{ width: '56px', height: '56px', objectFit: 'contain' }}
            />
            <div style={{ display: window.innerWidth >= 640 ? 'block' : 'none' }}>
              <div className="font-heading" style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>
                Grupo Escarox
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500' }}>
                Desde 1991
              </div>
            </div>
          </RouterLink>

          {/* Desktop Navigation */}
          <ul style={{ 
            display: window.innerWidth >= 1024 ? 'flex' : 'none', 
            alignItems: 'center', 
            gap: '8px',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleNavbar}
            style={{
              display: window.innerWidth >= 1024 ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            {isOpen ? (
              <X size={24} style={{ color: '#374151' }} />
            ) : (
              <Menu size={24} style={{ color: '#374151' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            borderTop: '1px solid #e5e7eb',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            display: window.innerWidth >= 1024 ? 'none' : 'block',
            borderRadius: '0 0 16px 16px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              padding: '24px 16px',
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
            }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {navItems.map((item, index) => (
                  <li key={index} style={{ 
                    marginBottom: '8px',
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden'
                  }}>
                    <div style={{ padding: '4px' }}>
                      <NavLink item={item} />
                    </div>
                  </li>
                ))}
              </ul>
              
              {/* Mobile menu footer */}
              <div style={{
                marginTop: '24px',
                padding: '16px',
                background: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#6b7280', 
                  margin: 0,
                  fontWeight: '500'
                }}>
                  Grupo Escarox - Desde 1991
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
