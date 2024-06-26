"use client";
import React, { useEffect, useRef, useState } from "react";
import ReadingAnswer from "./components/ReadingAnswer/ReadingAnswer";
import Header from "./components/ReadingHeader/ReadingHeader";

import {
	Test,
	Multiple_Choice_Question,
	Part,
	QuestionType,
	QuestionGroup,
	True_False_Question,
	Fill_Question,
} from "./components/ReadingInterface";
import ReadingParagraph from "./components/ReadingParagraph/ReadingParagraph";
import ReadingQuestionList from "./components/ReadingQuestionList/ReadingQuestionList";

import readingTest from "@/public/reading-test/readingTest1.json";
import { get } from "http";

export default function Reading({ params }) {
	const currentTest = readingTest;

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

	const getDuration = () => {
		if (params.id[1] == undefined) return 60 * 60;
		return params.id[1] * 60;
	};

	return (
		<div className="flex flex-col flex-shrink w-full h-full gap-2 p-2 max-lg:h-fit">
			<div className="flex flex-col h-full gap-4 p-4 bg-white border rounded-lg shadow-md max-lg:h-fit shadow-gray-300 lg:overflow-hidden">
				<div className="w-full h-fit">
					<Header
						value={highLight}
						setValue={setHighLight}
						part={part}
						duration={getDuration()}
					/>
				</div>
				<div className="w-full h-full flex items-center justify-center flex-col lg:flex-row overflow-scroll lg:overflow-hidden">
					{currentTest.partList.map((part, index) => {
						if (currentPart != index + 1) return null;
						return (
							<React.Fragment key={index}>
								<ReadingParagraph
									highLight={highLight}
									paragraph={part.paragraph}
								/>
								<ReadingAnswer
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
			<ReadingQuestionList
				answer={answer}
				currentPart={currentPart}
				setPart={setPart}
				partList={currentTest.partList}
			/>
		</div>
	);
}
