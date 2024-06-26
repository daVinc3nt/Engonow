"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Part } from "../ReadingInterface";
import QGroup from "./QuestionGroup/QGroup";

interface ReadingAnswerProps {
	part: Part;
	answer: string[];
	setAnswer: Dispatch<SetStateAction<string[]>>;
	open: boolean[];
	setOpen: Dispatch<SetStateAction<boolean[]>>;
}

export default function ReadingAnswer({
	part,
	answer,
	setAnswer,
	open,
	setOpen,
}: ReadingAnswerProps) {
	return (
		<div
			id="asnwer-container"
			className="w-full h-full col-span-6 flex flex-col overflow-y-scroll gap-8 p-2 pb-40 max-lg:col-span-full">
			{part.groupList.map((group, index) => {
				return (
					<React.Fragment key={index}>
						<QGroup
							questionGroup={group}
							answer={answer}
							setAnswer={setAnswer}
							open={open}
							setOpen={setOpen}
						/>
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
