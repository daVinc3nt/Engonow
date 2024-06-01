"use client";

import { Dispatch, SetStateAction } from "react";
import { Fill_Question } from "../../ReadingInterface";

interface Props {
	question: Fill_Question;
	answer: string[];
	setAnswer: Dispatch<SetStateAction<string[]>>;
}

export default function FQuestion({ question, answer, setAnswer }: Props) {
	const answerIndex = question.questionNumber;

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const newAns = [...answer];
		newAns[answerIndex - 1] = e.target.value as string;
		setAnswer(newAns);
	};

	return (
		<div 
		id={`ques${question.questionNumber}`}
		className="w-full h-fit grid grid-cols-12 gap-2 group">
			<div className="font-bold flex justify-center items-center max-md:col-span-2">
				<div className="min-w-8 min-h-8 bg-red-400 rounded-full flex justify-center items-center text-white hover:cursor-pointer">
					{question.questionNumber}
				</div>
			</div>
			{question.question && (
				<div
					className="w-full col-span-11 flex justify-start items-center"
					dangerouslySetInnerHTML={{ __html: question.question }}
				/>
			)}
			<div
				className={`w-full ${question.question ? "col-span-12" : "col-span-11"}`}>
				<input
					type="text"
					value={answer[answerIndex - 1]}
					onChange={handleChangeInput}
					className="w-full h-8 group-target:ring group-target:ring-red-400 border-2 border-red-200 p-2 rounded-lg outline-none focus:border-transparent focus:outline focus:ring focus:ring-red-400 bg-primary focus:bg-white"
				/>
			</div>
		</div>
	);
}
