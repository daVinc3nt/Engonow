"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Part } from "../ListeningInterface";
import QGroup from "./QuestionGroup/QGroup";

interface ListeningAnswerProps {
	part: Part;
	answer: string[];
	setAnswer: Dispatch<SetStateAction<string[]>>;
	open: boolean[];
	setOpen: Dispatch<SetStateAction<boolean[]>>;
}

export default function ListeningAnswer({
	part,
	answer,
	setAnswer,
	open,
	setOpen,
}: ListeningAnswerProps) {
	return (
		<div
			className="w-full h-full col-span-6 flex flex-col overflow-y-scroll gap-8 p-2 pb-40 max-lg:col-span-full">
			{part.groupList.map((group, index) => {
				return (
					<React.Fragment key={index}>
						<div>
							<QGroup
								questionGroup={group}
								answer={answer}
								setAnswer={setAnswer}
								open={open}
								setOpen={setOpen}
							/>
						</div>
						<hr className="solid border-gray-300 border rounded-full w-full"></hr>
					</React.Fragment>
				);
			})}

			<div className="w-full text-2xl font-bold flex items-center justify-center">
				{`End of part ${part.partNumber}`}
			</div>
		</div>
	);
}
