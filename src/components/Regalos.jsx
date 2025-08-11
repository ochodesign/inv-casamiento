import React, { useState } from "react";

const Regalos = () => {
  const [copied, setCopied] = useState("");
  const cbu = "0000003100000000001234";
  const alias = "casamiento.love";
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 1800);
  };
  return (
    <section className="w-full py-10 px-2 sm:px-4 bg-white flex flex-col items-center overflow-x-hidden">
      <h2 className="text-2xl md:text-3xl font-lora font-bold text-[#6b4f27] mb-4 flex items-center gap-2">
        <span className="inline-block align-middle">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="14" width="24" height="14" rx="3" fill="#bfa16a"/>
            <rect x="2" y="10" width="28" height="6" rx="2" fill="#6b4f27"/>
            <rect x="14" y="10" width="4" height="18" rx="2" fill="#fff"/>
            <path d="M16 10C13 7 10 5 9 7c-1 2 2 5 7 3" stroke="#bfa16a" strokeWidth="2" fill="none"/>
            <path d="M16 10c3-3 6-5 7-3 1 2-2 5-7 3" stroke="#bfa16a" strokeWidth="2" fill="none"/>
          </svg>
        </span>
        Regalos
      </h2>
      <div className="text-[#6b4f27] font-lora text-center max-w-xl">
        <p className="mb-4">Tu presencia es el mejor regalo, pero si deseas hacernos un presente, aquí tienes nuestras opciones:</p>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex items-center gap-2 bg-[#f7f3ef] rounded-lg px-4 py-2 border border-[#bfa16a] w-fit">
            <span className="font-semibold">CBU:</span> <span className="select-all">{cbu}</span>
            <button
              onClick={() => handleCopy(cbu, "cbu")}
              className="ml-2 px-2 py-1 text-xs rounded bg-[#bfa16a] text-white font-bold hover:bg-[#6b4f27] transition-colors focus:outline-none focus:ring-2 focus:ring-[#bfa16a]/40"
              aria-label="Copiar CBU"
            >
              {copied === "cbu" ? "¡Copiado!" : "Copiar"}
            </button>
          </div>
          <div className="flex items-center gap-2 bg-[#f7f3ef] rounded-lg px-4 py-2 border border-[#bfa16a] w-fit">
            <span className="font-semibold">Alias:</span> <span className="select-all">{alias}</span>
            <button
              onClick={() => handleCopy(alias, "alias")}
              className="ml-2 px-2 py-1 text-xs rounded bg-[#bfa16a] text-white font-bold hover:bg-[#6b4f27] transition-colors focus:outline-none focus:ring-2 focus:ring-[#bfa16a]/40"
              aria-label="Copiar Alias"
            >
              {copied === "alias" ? "¡Copiado!" : "Copiar"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regalos;
