import { Dispatch, SetStateAction } from "react";
import Switch from "@/components/Switch/Switch";
import Timer from "@/components/Timer/ReadingTimer";
import { Part } from "../WritingInterface";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from "react-icons/fa";
interface HeaderInterface {
	value: boolean;
	setValue: Dispatch<SetStateAction<boolean>>;
	part: Part;
	duration: number;
}

export default function Header({ value, setValue, part, duration }: HeaderInterface) {
	const [play, setPlay] = useState(false);
    const oceanRef = useRef<HTMLAudioElement>(null);
    const MAX = 20;
  
    const toggleAudio = () => {
      if (play) {
        oceanRef.current?.pause();
        setPlay(false);
      } else {
        void oceanRef.current?.play();
        setPlay(true);
      }
    }
  
    const handleVolume= (e: React.ChangeEvent<HTMLInputElement>) =>{
      const { value } = e.target;
      const volume = Number(value) / MAX;
      if ( oceanRef.current)
        oceanRef.current.volume = volume;
    }
	return (
		<div className="w-full min-h-fit grid grid-cols-10 grid-rows-subgrid gap-2 max-lg:grid-cols-2 max-lg:grid-rows-2">
			<div className="flex flex-row gap-4 items-center col-span-3 row-span-1 col-start-1 row-start-1 max-lg:col-span-1 max-lg:col-start-1">
				<Switch
					id="hightlight"
					size={6}
					value={value}
					setValue={setValue}
				/>
				<div className="font-semibold text-sm">Enable highlight</div>
			</div>

			<div className="w-full h-full col-span-2 row-span-2 col-start-6 row-start-1 flex items-center justify-center max-lg:col-span-1 max-lg:col-start-2 max-lg:row-span-1">
				<Timer duration={duration*60} size={20} />
			</div>

			<div className="w-full h-full col-span-4 row-span-1 col-start-1 row-start-2 max-lg:col-span-2">
				<h1 className="text-3xl font-bold">{`Part ${part.partNumber}`}</h1>
				<div className="w-full text-lg font-bold" dangerouslySetInnerHTML={{ __html: part.requirement }}></div>
			</div>
		</div>
	);
}

// <button className="w-fit h-fit text-lg font-semibold p-1 px-2 bg-red-100 hover:bg-red-900 hover:text-white duration-200  border-2 border-solid border-red-800 max-lg:w-1/2">
// 	Nộp bài
// </button>
