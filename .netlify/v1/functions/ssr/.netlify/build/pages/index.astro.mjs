/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, e as renderTransition, a as addAttribute, b as createAstro } from '../chunks/astro/server_DuGAL5Un.mjs';
import 'kleur/colors';
import 'html-escaper';
import { C as CardPlayButton, $ as $$Layout } from '../chunks/CardPlayButton_8J5PFgji.mjs';
import { p as playlists } from '../chunks/data_JfhwGOTi.mjs';
import { jsx } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$PlayListItemCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlayListItemCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists } = playlist;
  const artisitsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<article class="relative group transition-all duration-300  rounded-md  hover:bg-zinc-950"> <div class="absolute right-4 bottom-[70px] translate-y-4 transition-all duration-500 opacity-0 group-hover:opacity-100  group-hover:translate-y-0 z-10"> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "id": id, "size": 15, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/react/dimensional-doppler/src/components/CardPlayButton", "client:component-export": "default", "data-astro-transition-scope": renderTransition($$result, "m6wg6yml", "", `playlist ${id} buttom`) })} </div> <a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex relative p-2 overflow-hidden gap-2  rounded-md w-44 flex-col pb-4"${addAttribute(renderTransition($$result, "iyk6g74u", "", `playlist ${id} box`), "data-astro-transition-scope")}> <picture class="aspect-square w-full h-auto flex-none"> <img${addAttribute(cover, "src")} class="object-cover w-full h-full rounded-md"${addAttribute(`Cover of ${title} by ${artisitsString}`, "alt")}${addAttribute(renderTransition($$result, "ogeug6cu", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="truncate flex flex-col flex-auto"> <h4 class="font-medium text-sm"${addAttribute(renderTransition($$result, "ls2g7uvg", "", `playlist ${id} h4`), "data-astro-transition-scope")}> ${title} </h4> <span class=" truncate font-extralight text-sm text-gray-400"${addAttribute(renderTransition($$result, "b2lel7vz", "", `playlist ${id} span`), "data-astro-transition-scope")}> ${artisitsString} </span> </div> </a> </article>`;
}, "D:/react/dimensional-doppler/src/components/PlayListItemCard.astro", "self");

function Greeting() {
  const currentTime = /* @__PURE__ */ new Date();
  const currentHour = currentTime.getHours();
  let greeting = "";
  if (currentHour < 12) {
    greeting = "Buenos días";
  } else if (currentHour < 18) {
    greeting = "Buenas tardes";
  } else {
    greeting = "Buenas noches";
  }
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { class: "text-3xl font-semibold", children: greeting }) });
}

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative transition-all duration-1000 bg-green-900"> <div class="relative z-10 px-6 py-3"> ${renderComponent($$result2, "Greeting", Greeting, {})} <div class="flex flex-wrap mt-6 gap-4"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result2, "PlayListItemCard", $$PlayListItemCard, { "playlist": playlist })}`)} </div> </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"></div> </div> ` })}`;
}, "D:/react/dimensional-doppler/src/pages/index.astro", void 0);

const $$file = "D:/react/dimensional-doppler/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
