import React from 'react';
import { IoTime } from "react-icons/io5";

function MusicTable({ songs, id }) {

  const handleClick = (index) => {
    alert(`Hola, índice: ${index}, id: ${id}`);
  };
  return (
    <table className="table-auto text-left min-w-full divide-y divide-gray-500/20">
      <thead>
        <tr className="text-zinc-400 text-sm">
          <th className="px-4 py-2 font-light">#</th>
          <th className="px-4 py-2 font-light">Título</th>
          <th className="px-4 py-2 font-light">Álbum</th>
          <th className="px-4 py-2 font-light"><IoTime size={18} /></th>
        </tr>
      </thead>

      <tbody>
        <tr className="h-[16px]"></tr>
        {
          songs?.map((song, index) => (
            <tr
              key={index} 
              onClick={() => handleClick(index)}
              className="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300 cursor-pointer"
            >
              <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">{index + 1}</td>
              <td className="px-4 py-2 flex gap-3">
                <picture>
                  <img src={song.image} alt={song.title} className="w-11 h-11" loading="lazy" />
                </picture>
                <div className="flex flex-col">
                  <h3 className="text-white text-base font-normal">{song.title}</h3>
                  <span>{song.artists.join(", ")}</span>
                </div>
              </td>
              <td className="px-4 py-2">{song.album}</td>
              <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">{song.duration}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default MusicTable;
