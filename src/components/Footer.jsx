import React from "react";

const Footer = () => {
  return (
  <footer className="w-full py-8 bg-primary text-white flex flex-col items-center font-lora text-sm overflow-x-hidden px-2">
      <div className="text-lg font-bold tracking-wide mb-1">Karina & Sergio</div>
  <div className="italic text-base text-white max-w-xl text-center mb-3" style={{fontFamily:'Lora,serif'}}>
        "El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección."
      </div>
    <div className="mt-2 mb-1 text-white">© {new Date().getFullYear()} Nuestra Boda</div>
  <div className="text-xs text-white mt-2">
  Diseñado por <a href="https://ochodesignweb.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Ocho Design</a>
    </div>
    </footer>
  );
};

export default Footer;
