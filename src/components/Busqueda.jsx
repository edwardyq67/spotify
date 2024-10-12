import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function SearchComponent() {
  const inputRef = useRef(null);
  const [stado, setStado] = useState(false);
  const [valor, setValor] = useState("");

  const handleClick = () => {
    alert(valor);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si el clic fue fuera del contenedor, cerramos el campo de búsqueda
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setStado(false);
      }
    };

    // Añadir el evento al documento
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar el evento al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  return (
    <form
      className="flex items-center gap-4 w-full justify-start overflow-x-hidden cursor-pointer"
      ref={inputRef}
      onClick={() => setStado(true)} // Solo abre el input al hacer clic
    >
      <input
        type="text"
        onChange={(e) => setValor(e.target.value)}
        value={valor}
        placeholder="Buscar"
        className={`transition-all duration-300 ease-in-out bg-transparent border-b-2 border-zinc-600 outline-none text-base flex-1 ${
          stado ? "translate-x-0 opacity-100 w-40" : "-translate-x-40 opacity-0 absolute"
        }`}
      />
      <div
        onClick={handleClick} // Corrección aquí, llamamos a la función correctamente
        className={`cursor-pointer ${stado ? "translate-x-0 duration-300" : "block"}`}
      >
        <FaSearch />
      </div>

      {/* Mostrar solo el texto 'Buscar' si el input no está visible */}
      <span className={`${stado ? "hidden" : "block"}`}>Buscar</span>
    </form>
  );
}

export default SearchComponent;

