import {create} from "Zustand";

export const usePlaterStore=create((set)=>({
    isPlaying:false,
    currentMusic:{playlists:null,song:null,songs:[]},
    volume:1,
    setVolume:(volume)=>set({volume}),
    setIsPlaying:(isPlaying)=>set({isPlaying}),
    setCurrentMusic:(currentMusic)=>set({currentMusic})
}))