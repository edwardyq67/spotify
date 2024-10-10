
import { FaPause, FaPlay } from "react-icons/fa";
import { usePlaterStore } from "@/store/musicStore";
import axios from "axios";
function CardPlayButton({ id,size,value }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlaterStore((state) => state);
    // Verifica si la playlist actual es la que se está reproduciendo
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id;

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }
    
    axios.get(`/api/get-info-playlist.json?id=${id}`)
    .then(res => {
      const { songs, playlist } = res.data;
      setIsPlaying(!isPlaying);
      setCurrentMusic({ songs, playlist, song: songs[value] });
    })
    .catch(err => {
      console.error("Error fetching playlist data:", err);
    });
  
  };
  return (
    <button
      onClick={handleClick}
      className="bg-green-500 rounded-full p-2.5 text-zinc-900 transition-all duration-300 hover:scale-[1.05]"
    >
      {isPlayingPlaylist ? <FaPause size={size} /> : <FaPlay size={size}/>}
    </button>
  );
}

export default CardPlayButton;
