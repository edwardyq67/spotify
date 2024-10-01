
import { useEffect, useRef, useState } from "react";
import { usePlaterStore } from "@/store/musicStore";
import { Slider } from "./Slider";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";
export const Pause = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

const CurrentSong = ({ image, title, album }) => {
  return (
    <div className={`flex items-center gap-5 relative overflow-hidden`}>
      <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
        <img src={image} className="" alt={title} />
      </picture>
      <div className="flex flex-col">
        <h3 className="font-bold block text-sm">{title}</h3>
        <h3 className="font-extralight text-sm text-gray-400 block">{album}</h3>
      </div>
    </div>
  );
};

const SongControl = ({ audio }) => {
  const [currentTime, setCurrenTime] = useState(0);
  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [currentTime]);

  const formatTime = (time) => {
    if (time == null) {
      return "00:00";
    }
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);

    return `${minutes}:${seconds.toString().padStart(2, 0)}`;
  };

  const handleTimeUpdate = () => {
    setCurrenTime(audio.current.currentTime);
  };
  const duracion = audio?.current?.duration ?? 0;
  return (
    <div className="flex gap-x-2  justify-between items-center text-sm text-zinc-400">
      <span className=" min-w-10 flex justify-center items-center">
        {formatTime(currentTime)}
      </span>
      <Slider
        defaultValue={[0]}
        max={duracion}
        min={0}
        className="w-[500px]"
        value={[currentTime]}
        onValueChange={(value) => {
          const [newCurrTime] = value;
          audio.current.currentTime = newCurrTime;
        }}
      />
      {duracion ? (
        <span className="min-w-10 flex justify-center items-center">
          {formatTime(duracion)}
        </span>
      ) : (
        <span className="min-w-10 flex justify-center">0:00</span>
      )}
    </div>
  );
};

const VolumeControl = () => {
  const volume = usePlaterStore((state) => state.volume);
  const setVolume = usePlaterStore((state) => state.setVolume);
  const previusVolumeRef = useRef(volume);

  const isVolumenSilenced = volume < 0.1;

  const handleClickVolumen = () => {
    if (isVolumenSilenced) {
      setVolume(previusVolumeRef.current);
    } else {
      previusVolumeRef.current = volume;
      setVolume(0);
    }
  };

  return (
    <div className="flex justify-center gap-x-2">
      <button onClick={handleClickVolumen}>
        {isVolumenSilenced < 0.1 ? (
          <FaVolumeHigh color="white" />
        ) : (
          <FaVolumeXmark color="white" />
        )}
      </button>

      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        className="w-[95px]"
        value={[volume * 100]}
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }}
      />
    </div>
  );
};

export function Player() {
  const { currentMusic, isPlaying, setIsPlaying, volume } = usePlaterStore(state => state)
  const audioRef = useRef()

  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    const { song, playlist } = currentMusic;
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume; // Aplicar volumen
      audioRef.current.play(); // Reproducir audio
    }
  }, [currentMusic]);

  const handleClick = () => {
    setIsPlaying(!isPlaying); // Cambiar el estado
  };

  return (
    <div className="flex flex-row justify-between w-full  h-full items-center px-4">
      <div>
        <CurrentSong {...currentMusic.song} />
      </div>
      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center flex-col items-center gap-y-2">
          <button className="bg-white rounded-full p-2" onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <SongControl audio={audioRef} />
        </div>
      </div>
      <div className="grid items-center  h-full">
        <VolumeControl />
      </div>

      <audio ref={audioRef}></audio>
    </div>
  );
}
