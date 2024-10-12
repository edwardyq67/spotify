import React from "react";
import { IoTime } from "react-icons/io5";
import { usePlaterStore } from "@/store/musicStore";
import axios from "axios";
function MusicTable({ songs, id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlaterStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id;

  const handleClick = (index) => {
    axios
      .get(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => {
        const { songs, playlist } = res.data;
        setIsPlaying(true);
        setCurrentMusic({ songs, playlist, song: songs[index] });
      })
      .catch((err) => {
        console.error("Error fetching playlist data:", err);
      });
  };
  return (
    <table className="table-auto text-left min-w-full divide-y divide-gray-500/20 ">
      <thead className="overflow-y-auto">
        <tr className="text-zinc-400 text-sm">
          <th className="px-4 py-2 font-light">#</th>
          <th className="px-4 py-2 font-light">Título</th>
          <th className="px-4 py-2 font-light">Álbum</th>
          <th className="px-4 py-2 font-light">
            <IoTime size={18} />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="h-[16px]"></tr>
        {songs?.map((song, index) => (
          <tr
            key={index}
            onClick={() => handleClick(index)}
            className="border-spacing-0 text-gray-300 text-sm overflow-y-auto font-light hover:bg-white/10 transition  duration-300 cursor-pointer"
          >
            <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg">
              {index + 1}
            </td>
            <td className="px-4 py-2 flex gap-3">
              <picture>
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-11 h-11 min-w-10 min-h-10"
                  loading="lazy"
                />
              </picture>
              <div className="flex flex-col">
                <h3 className="text-white text-base font-normal whitespace-nowrap">
                  {song.title}
                </h3>
                <span className="whitespace-nowrap">
                  {song.artists.join(", ")}
                </span>
              </div>
            </td>
            <td className="px-4 py-2 whitespace-nowrap">{song.album}</td>
            <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">
              {song.duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MusicTable;
