"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/WritingHeader/ListeningHeader";
import { FaPlay, FaPause } from "react-icons/fa";
import Timer from "@/components/Timer/ReadingTimer";
import ListeningParagraph from "../components/WritingParagraph/ListeningParagraph";
import ListeningQuestionList from "../components/WritingQuestionList/ListeningQuestionList";

import writingTest from "@/public/writing-test/writingTest.json";
import { Player } from "@lottiefiles/react-lottie-player";
import WritingAnswer from "../components/WritingAnswer/WritingAnswer";

export default function Listening({params}) {
	console.log(params.id[1])
	const currentTest = writingTest.writingtest[0];
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
					</div>
				</div>
				<div
					id="test-container"
					className="w-full h-fit flex items-center justify-center flex-col lg:flex-row lg:overflow-hidden">
					{currentTest.partList.map((part, index) => {
						if (currentPart != index + 1) return null;
						return (
							<React.Fragment key={index}>
								{part.paragraph !="" && <ListeningParagraph
									highLight={highLight}
									paragraph={part.paragraph}
								/>}
								<WritingAnswer
									part={part}
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
