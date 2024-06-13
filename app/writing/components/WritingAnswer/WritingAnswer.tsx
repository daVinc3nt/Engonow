"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Part } from "../WritingInterface";
interface WritingAnswerProps {
	part: Part;
}

export default function WritingAnswer({
	part
}: WritingAnswerProps) {
	return (
		<div
			id="asnwer-container"
			className="w-full h-full col-span-6 flex flex-col overflow-y-scroll gap-8 p-2 max-lg:col-span-full">
				<textarea className="h-full bg-gray-100 "></textarea>
			<div className="w-full text-2xl font-bold flex items-center justify-center">
				{`End of part ${part.partNumber}`}
			</div>
		</div>
	);
}
