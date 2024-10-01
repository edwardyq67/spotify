/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, b as createAstro, e as renderTransition } from '../../chunks/astro/server_DuGAL5Un.mjs';
import 'kleur/colors';
import 'html-escaper';
import { C as CardPlayButton, $ as $$Layout } from '../../chunks/CardPlayButton_8J5PFgji.mjs';
import { a as allPlaylists, s as songs } from '../../chunks/data_JfhwGOTi.mjs';
import { IoTime } from 'react-icons/io5';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$MusicTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MusicTable;
  const { songs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="table-auto text-left min-w-full divide-y divide-gray-500/20"> <thead class=""> <tr class="text-zinc-400 text-sm"> <th class="px-4 py-2 font-light">#</th> <th class="px-4 py-2 font-light">Título</th> <th class="px-4 py-2 font-light">Álbum</th> <th class="px-4 py-2 font-light">${renderComponent($$result, "IoTime", IoTime, { "size": 18 })}</th> </tr> </thead> <tbody> <tr class="h-[16px]"></tr> ${songs.map((song, index) => renderTemplate`<tr class="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300 cursor-pointer"> <td class="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">${index + 1}</td> <td class="px-4 py-2 flex gap-3"> <picture class=""> <img${addAttribute(song.image, "src")}${addAttribute(song.title, "alt")} class="w-11 h-11"> </picture> <div class="flex flex-col"> <h3 class="text-white text-base font-normal">${song.title}</h3> <span>${song.artists.join(", ")}</span> </div> </td> <td class="px-4 py-2">${song.album}</td> <td class="px-4 py-2 rounded-tr-lg rounded-br-lg">${song.duration}</td> </tr>`)} </tbody> </table>`;
}, "D:/react/dimensional-doppler/src/components/MusicTable.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlists = allPlaylists.find((playlists2) => playlists2.id === id);
  const playListSongs = songs.filter(
    (song) => song.albumId === playlists?.albumId
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify Clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative transition-all duration-1000 bg-zinc-900 overflow-x-hidden pt-10"${addAttribute(renderTransition($$result2, "lwbbxtwc", "", `playlist ${id} box`), "data-astro-transition-scope")}> <header class="flex flex-row gap-8 px-6"> <picture class="aspect-square w-52 h-52 flex-none"> <img${addAttribute(playlists?.cover, "src")} class="object-cover w-full h-full rounded-md"${addAttribute(`Cover of ${playlists?.title}`, "alt")}${addAttribute(renderTransition($$result2, "447rgqct", "", `playlist ${playlists?.id} image`), "data-astro-transition-scope")}> </picture> <div class="truncate flex flex-col items-start justify-center gap-1"> <h4 class="font-medium text-5xl text-white"${addAttribute(renderTransition($$result2, "4oet3qap", "", `playlist ${playlists?.id} h4`), "data-astro-transition-scope")}> ${playlists?.title} </h4> <span class="truncate font-extralight text-xl text-gray-400"${addAttribute(renderTransition($$result2, "6d2yjslm", "", `playlist ${playlists?.id} span`), "data-astro-transition-scope")}> ${playlists?.artists.join(", ")} </span> </div> </header> <div class="px-6 pt-5"> ${renderComponent($$result2, "CardPlayButton", CardPlayButton, { "id": id, "size": 20, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/react/dimensional-doppler/src/components/CardPlayButton", "client:component-export": "default" })} </div> <div class="reative z-10 px-6 py-3"></div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-10"></div> <section class="p-2"> ${renderComponent($$result2, "MusicTable", $$MusicTable, { "songs": playListSongs })} </section> </div> ` })}`;
}, "D:/react/dimensional-doppler/src/pages/playlist/[id].astro", "self");

const $$file = "D:/react/dimensional-doppler/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
