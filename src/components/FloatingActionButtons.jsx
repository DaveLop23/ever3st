import React from 'react';

const FloatingActionButtons = () => {
  // Función para manejar el clic en cada botón
  const handleClick = (network) => {
    let url = '';
    switch (network) {
      case 'WhatsApp':
        url = 'https://wa.me/+529995445955';
        break;
      case 'Facebook':
        url = 'https://www.facebook.com/Ever3stGroupConsulting';
        break;
      case 'Instagram':
        url = 'https://www.instagram.com/ever3stgroup';
        break;
      default:
        break;
    }
    window.open(url, '_blank'); // Abre la URL en una nueva pestaña
  };

  return (
    <div>
      {/* Contenedor de los botones flotantes */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* Botón flotante de WhatsApp */}
        <button
          className="btn btn-success btn-lg rounded-circle"
          onClick={() => handleClick('WhatsApp')}
        >
          <i className="bi bi-whatsapp"></i>
        </button>

        {/* Botón flotante de Facebook */}
        <button
          className="btn btn-primary btn-lg rounded-circle"
          onClick={() => handleClick('Facebook')}
        >
          <i className="bi bi-facebook"></i>
        </button>

        {/* Botón flotante de Instagram */}
        <button
          className="btn btn-danger btn-lg rounded-circle"
          onClick={() => handleClick('Instagram')}
        >
          <i className="bi bi-instagram"></i>
        </button>
      </div>
    </div>
  );
};

export default FloatingActionButtons;
