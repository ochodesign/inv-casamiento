import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      const res = await fetch("/backend/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(form).toString(),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", text: data.message });
        setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        setStatus({ type: "error", text: data.message || "Error al enviar el mensaje." });
      }
    } catch {
      setStatus({ type: "error", text: "Error al enviar el mensaje." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl font-saira">
      <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">Contacto</h2>
      <p className="mb-6 text-gray-500 text-center">¿Listo para tu próximo proyecto? ¡Escríbeme o contáctame por redes!</p>
      <form onSubmit={handleSubmit} className="space-y-4">
          <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" className="flex-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="flex-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
       
        <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono (opcional)" type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Mensaje" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none min-h-[120px]" required />
        <button type="submit" disabled={loading} className={`w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition ${loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-800'}`}>{loading ? 'Enviando...' : 'Enviar mensaje'}</button>
        {status && (
          <p className={`mt-2 text-center font-medium ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{status.text}</p>
        )}
      </form>
      <div className="mt-8 flex flex-col items-center gap-2">
        <span className="text-gray-500">O contáctame en:</span>
        <div className="flex gap-6 mt-2">
          <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group" title="WhatsApp">
            <span className="bg-green-100 group-hover:bg-green-200 transition rounded-full p-3 mb-1 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.64 6.06L0 24l6.18-1.62A12.09 12.09 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.13-1.41l-.37-.22-3.67.96.98-3.58-.24-.37A9.93 9.93 0 1 1 12 22zm5.47-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.37.71.3 1.26.48 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/></svg>
            </span>
            <span className="text-xs text-green-700 font-medium">WhatsApp</span>
          </a>
          <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group" title="Instagram">
            <span className="bg-pink-100 group-hover:bg-pink-200 transition rounded-full p-3 mb-1 flex items-center justify-center">
              <svg className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1.5"/>
              </svg>
            </span>
            <span className="text-xs text-pink-600 font-medium">Instagram</span>
          </a>
          <a href="mailto:lucas@tucorreo.com" className="flex flex-col items-center group" title="Email">
            <span className="bg-blue-100 group-hover:bg-blue-200 transition rounded-full p-3 mb-1 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
            </span>
            <span className="text-xs text-blue-700 font-medium">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
