import React, { useState, useEffect } from 'react';

function AdminContactos() {
  const [contactos, setContactos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/backend/get-contactos.php')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setContactos(data.contactos);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const marcarComoLeido = (id) => {
    fetch('/backend/marcar-leido.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ id }).toString()
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setContactos(prev => 
          prev.map(c => c.id === id ? { ...c, leido: 1 } : c)
        );
      }
    });
  };

  if (loading) return <div className="p-8">Cargando...</div>;

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Mensajes de Contacto</h1>
      
      {contactos.length === 0 ? (
        <p className="text-gray-500">No hay mensajes aún.</p>
      ) : (
        <div className="space-y-4">
          {contactos.map(contacto => (
            <div 
              key={contacto.id} 
              className={`p-6 border rounded-lg ${
                contacto.leido ? 'bg-gray-50' : 'bg-white border-blue-200'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{contacto.nombre}</h3>
                  <p className="text-gray-600">{contacto.email}</p>
                  {contacto.telefono && (
                    <p className="text-gray-600">{contacto.telefono}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    {new Date(contacto.fecha).toLocaleString()}
                  </p>
                  {!contacto.leido && (
                    <button
                      onClick={() => marcarComoLeido(contacto.id)}
                      className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                    >
                      Marcar como leído
                    </button>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-100 p-4 rounded">
                <p className="whitespace-pre-wrap">{contacto.mensaje}</p>
              </div>
              
              <div className="mt-4 flex gap-2">
                <a 
                  href={`mailto:${contacto.email}?subject=Re: Tu mensaje&body=Hola ${contacto.nombre},%0A%0A`}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Responder por Email
                </a>
                {contacto.telefono && (
                  <a 
                    href={`https://wa.me/${contacto.telefono.replace(/\D/g, '')}?text=Hola ${contacto.nombre}, recibí tu mensaje.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    WhatsApp
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminContactos;
