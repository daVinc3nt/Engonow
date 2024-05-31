"use client";
import React, { useEffect, useRef, useState } from "react";
import ListeningAnswer from "../components/ListeningAnswer/ListeningAnswer";
import Header from "../components/ListeningHeader/ListeningHeader";
import { FaPlay, FaPause } from "react-icons/fa";
import Timer from "@/components/Timer/ReadingTimer";
import {
	Test,
	Multiple_Choice_Question,
	Part,
	QuestionType,
	QuestionGroup,
	True_False_Question,
	Fill_Question,
} from "../components/ListeningInterface";
import ListeningParagraph from "../components/ListeningParagraph/ListeningParagraph";
import ListeningQuestionList from "../components/ListeningQuestionList/ListeningQuestionList";

import listeningTest from "@/public/listening-test/listeningTest.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Listening({params}) {
	console.log(params.id[1])
	const currentTest = listeningTest.listeningtest[0];
	const [currentPart, setPart] = useState<number>(1);
	const part = currentTest.partList[currentPart - 1];

	const [highLight, setHighLight] = useState<boolean>(false);
	const [highLightRange, setHighLightRange] = useState<Range[][]>([[]]);

	const [answer, setAnswer] = useState<string[]>(
		Array(currentTest.numberOfQuestion).fill("")
	);

	const [open, setOpen] = useState<boolean[]>(
		Array(currentTest.numberOfQuestion).fill(false)
	);
	useEffect(() => {
		var myDiv = document.getElementById("test-container");
		myDiv.scrollTop = 0;
	}, [currentPart]);
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
		<div className="w-full h-full flex flex-col flex-shrink gap-2 p-2 max-lg:h-fit">
			<div className="h-full max-lg:h-fit bg-white border shadow-md shadow-gray-300 rounded-lg flex flex-col gap-4 p-4 lg:overflow-hidden">
				<div className="w-full h-fit flex">
					<Header
						value={highLight}
						setValue={setHighLight}
						part={part}
						duration={params.id[1]}
					/>
					<div className='flex flex-col items-center'>
						<Player
							src='/animation/cheer.json'
							className="player"
							loop
							autoplay
							style={{ height: '100px', width: '100px' }}
						/>
						<div className='flex'>
							<button
							onClick={toggleAudio}
							type="button"
							className=" w-10 rounded-full p-2 text-white shadow-sm"
							>
								{!play ? (
									<FaPlay className="h-5 w-5 text-black" aria-hidden="true" />
								) : (
									<FaPause className="h-5 w-5 text-black" aria-hidden="true" />
								)}
							</button>         
							<input
								type="range"
								className="mr-2 w-full accent-cyan-700"
								min={0}
								max={MAX}
								onChange={(e) => handleVolume(e)}
							/>
							<audio ref={oceanRef} loop src={currentTest.linkaudio}/>
						</div>
					</div>
				</div>
				<div
					id="test-container"
					className="w-full h-full flex items-center justify-center flex-col lg:flex-row overflow-scroll lg:overflow-hidden">
					{currentTest.partList.map((part, index) => {
						if (currentPart != index + 1) return null;
						return (
							<React.Fragment key={index}>
								{part.paragraph !="" && <ListeningParagraph
									highLight={highLight}
									title={part.title}
									paragraph={part.paragraph}
								/>}
								<ListeningAnswer
									part={part}
									answer={answer}
									setAnswer={setAnswer}
									open={open}
									setOpen={setOpen}
								/>
							</React.Fragment>

						);
					})}
				</div>
			</div>
			<ListeningQuestionList
				answer={answer}
				currentPart={currentPart}
				setPart={setPart}
				partList={currentTest.partList}
			/>
		</div>
	);
}
