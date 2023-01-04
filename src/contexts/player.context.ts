import { createContext } from "react";
import { IMusicBasicProps } from "../interfaces/music.interface";

export type PlayerContextType = {
    handleLoad: (musics: IMusicBasicProps[]) => void,
    musics?: IMusicBasicProps[],
    setMusics: (musics: IMusicBasicProps[]) => void,
    playing: boolean,
    setPlaying: (playing: boolean) => void,
    volume: number,
    handleChangeVolume: (volume: number) => void,
    random: boolean,
    handleRandom: () => void,
    repeat: boolean,
    handleRepeat: () => void,
    handleSlide(index: number): void,
    handleSlideToEnd(): void,
    handlePreviousMusic(): void,
    handleNextMusic(): void,
    musicProgress: number,
    duration: number,
}


export const PlayerContext = createContext<PlayerContextType>({} as PlayerContextType);