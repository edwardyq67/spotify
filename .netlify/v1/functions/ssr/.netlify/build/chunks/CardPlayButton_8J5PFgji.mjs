import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, b as createAstro, d as renderComponent, g as renderHead, e as renderTransition } from './astro/server_DuGAL5Un.mjs';
import 'kleur/colors';
import 'html-escaper';
import cn from 'clsx';
import { FaHome, FaSearch, FaBookmark, FaPause, FaPlay } from 'react-icons/fa';
import { p as playlists } from './data_JfhwGOTi.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6';
/* empty css                         */
import { create } from 'zustand';
import axios from 'axios';

const $$Astro$3 = createAstro();
const $$SliderMenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SliderMenuItem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a class="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300 cursor-pointer"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "D:/react/dimensional-doppler/src/components/SliderMenuItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$SideMenuCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideMenuCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists } = playlist;
  const artisitsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-zinc-800"> <picture class="h-12 w-12 flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artisitsString}`, "alt")} class="object-cover w-full h-full rounded-md"> </picture> <div class="truncate flex flex-col flex-auto"> <h4 class="font-medium text-sm"> ${title} </h4> <span class="font-extralight text-sm text-gray-400"> ${artisitsString} </span> </div> </a>`;
}, "D:/react/dimensional-doppler/src/components/SideMenuCard.astro", void 0);

const $$AsideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col  flex-1 gap-2"> <div class="bg-zinc-900 rounded-lg p-2"> <ul> ${renderComponent($$result, "SliderMenuItem", $$SliderMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FaHome", FaHome, {})}
Inicio
` })} ${renderComponent($$result, "SliderMenuItem", $$SliderMenuItem, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FaSearch", FaSearch, {})}
Buscar
` })} </ul> </div> <div class="bg-zinc-900 rounded-lg p-2 flex-1"> <ul> ${renderComponent($$result, "SliderMenuItem", $$SliderMenuItem, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FaBookmark", FaBookmark, {})}
Tu biblioteca
` })} ${playlists.map(
    (playlist) => renderTemplate`${renderComponent($$result, "SideMenuCard", $$SideMenuCard, { "playlist": playlist })}`
  )} </ul> </div> </nav>`;
}, "D:/react/dimensional-doppler/src/components/AsideMenu.astro", void 0);

const usePlaterStore=create((set)=>({
    isPlaying:false,
    currentMusic:{playlists:null,song:null,songs:[]},
    volume:1,
    setVolume:(volume)=>set({volume}),
    setIsPlaying:(isPlaying)=>set({isPlaying}),
    setCurrentMusic:(currentMusic)=>set({currentMusic})
}));

const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex touch-none select-none items-center group",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1 w-full grow overflow-hidden rounded-full bg-gray-800", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-white group-hover:bg-green-400" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

const Pause = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", { d: "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" })
  }
);
const Play = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", { d: "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" })
  }
);
const CurrentSong = ({ image, title, album }) => {
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-5 relative overflow-hidden`, children: [
    /* @__PURE__ */ jsx("picture", { className: "w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: image, className: "", alt: title }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold block text-sm", children: title }),
      /* @__PURE__ */ jsx("h3", { className: "font-extralight text-sm text-gray-400 block", children: album })
    ] })
  ] });
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
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2  justify-between items-center text-sm text-zinc-400", children: [
    /* @__PURE__ */ jsx("span", { className: " min-w-10 flex justify-center items-center", children: formatTime(currentTime) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        defaultValue: [0],
        max: duracion,
        min: 0,
        className: "w-[500px]",
        value: [currentTime],
        onValueChange: (value) => {
          const [newCurrTime] = value;
          audio.current.currentTime = newCurrTime;
        }
      }
    ),
    duracion ? /* @__PURE__ */ jsx("span", { className: "min-w-10 flex justify-center items-center", children: formatTime(duracion) }) : /* @__PURE__ */ jsx("span", { className: "min-w-10 flex justify-center", children: "0:00" })
  ] });
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
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-x-2", children: [
    /* @__PURE__ */ jsx("button", { onClick: handleClickVolumen, children: isVolumenSilenced < 0.1 ? /* @__PURE__ */ jsx(FaVolumeHigh, { color: "white" }) : /* @__PURE__ */ jsx(FaVolumeXmark, { color: "white" }) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        defaultValue: [100],
        max: 100,
        min: 0,
        className: "w-[95px]",
        value: [volume * 100],
        onValueChange: (value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }
      }
    )
  ] });
};
function Player() {
  const { currentMusic, isPlaying, setIsPlaying, volume } = usePlaterStore((state) => state);
  const audioRef = useRef();
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    const { song, playlist } = currentMusic;
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  }, [currentMusic]);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between w-full  h-full items-center px-4", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CurrentSong, { ...currentMusic.song }) }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center gap-4 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-col items-center gap-y-2", children: [
      /* @__PURE__ */ jsx("button", { className: "bg-white rounded-full p-2", onClick: handleClick, children: isPlaying ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {}) }),
      /* @__PURE__ */ jsx(SongControl, { audio: audioRef })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid items-center  h-full", children: /* @__PURE__ */ jsx(VolumeControl, {}) }),
    /* @__PURE__ */ jsx("audio", { ref: audioRef })
  ] });
}

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/react/dimensional-doppler/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none", "data-astro-cid-sckkx6r4": true })}<title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="app" class="relative h-screen p-2 gap-2" data-astro-cid-sckkx6r4> <aside class="[grid-area:aside] flex-col flex overflow-y-auto" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AsideMenu", $$AsideMenu, { "data-astro-cid-sckkx6r4": true })} </aside> <main class="[grid-area:main] flex-col flex rounded-lg overflow-y-auto bg-zinc-900" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="[grid-area:player] flex-col flex rounded-lg overflow-y-auto min-h-[100px]" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Player", Player, { "client:load": true, "data-astro-transition-persist": "media-player", "client:component-hydration": "load", "client:component-path": "@/components/Player", "client:component-export": "Player", "data-astro-cid-sckkx6r4": true, "data-astro-transition-scope": renderTransition($$result, "p74ezckc", "", "media-player") })} </footer> </div>  </body></html>`;
}, "D:/react/dimensional-doppler/src/layouts/Layout.astro", "self");

function CardPlayButton({ id, size }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlaterStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id;
  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }
    axios.get(`/api/get-info-playlist.json?id=${id}`).then((res) => {
      const { songs, playlist } = res.data;
      setIsPlaying(true);
      setCurrentMusic({ songs, playlist, song: songs[0] });
    }).catch((err) => {
      console.error("Error fetching playlist data:", err);
    });
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClick,
      className: "bg-green-500 rounded-full p-2.5 text-zinc-900 transition-all duration-300 hover:scale-[1.05]",
      children: isPlayingPlaylist ? /* @__PURE__ */ jsx(FaPause, { size }) : /* @__PURE__ */ jsx(FaPlay, { size })
    }
  );
}

export { $$Layout as $, CardPlayButton as C };
