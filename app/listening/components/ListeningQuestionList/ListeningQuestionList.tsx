import ArrowLeftIcon from "@/components/Icon/ArrowLeft";
import ArrowRightIcon from "@/components/Icon/ArrowRight";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { Part } from "../ListeningInterface";

interface ListeningQuestionListProps {
	answer: string[];
	currentPart: number;
	setPart: Dispatch<SetStateAction<number>>;
	partList: Part[];
}

export default function ListeningQuestionList({
	answer,
	currentPart,
	setPart,
	partList,
}: ListeningQuestionListProps) {
	return (
		<div className="w-full min-h-fit bg-white border  rounded-lg shadow-md shadow-gray-300 grid grid-cols-12 p-4 gap-4">
			<div className="col-span-10  h-fit grid grid-cols-2 px-4 max-lg:grid-cols-1 max-lg:col-span-full gap-2">
				{Array.from({ length: partList.length }, (_, index) => {
					const startQuestion = partList[index].startQuestion;
					const endQuestion = partList[index].endQuestion;
					return (
						<div
							key={index}
							className="w-full h-fit  flex flex-row justify-start items-center font-bold gap-2 max-lg:flex-col max-lg:items-start">
							<div className="text-xl">{`Part ${index + 1}:`}</div>
							<div 
							onClick={()=>setPart(index+1)}
							className="flex flex-row  gap-1 w-fit h-fit">
								{Array.from(
									{
										length: endQuestion - startQuestion + 1,
									},
									(_, index) => {
										const questionNumber =
											startQuestion + index;
										return (
											<a
												key={index}
												href={`#ques${questionNumber}`}
												className={`${answer[questionNumber - 1] == "" ? "bg-white text-red-400" : "bg-red-400 text-white"} w-7 h-7	 
												rounded-full border-2 hover:cursor-pointer border-red-200 
												max-lg:w-7 max-lg:h-7 flex justify-center items-center text-xs`}>
												{questionNumber}
											</a>
										);
									}
								)}
							</div>
						</div>
					);
				})}
			</div>
			<div className="col-span-2 h-fit max-lg:col-span-full grid grid-cols-2 gap-4">
				{currentPart - 1 > 0 ? (
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 1.0 }}
						onClick={() => setPart(currentPart - 1)}
						className="w-full h-full flex flex-row items-center justify-end gap-2 cursor-pointer">
						<div className="text-lg">{`Part ${currentPart - 1}`}</div>
						<div className="w-12 h-12 flex items-center justify-center">
							<ArrowLeftIcon
								width={12}
								height={12}
								color="#f87171"
							/>
						</div>
					</motion.div>
				) : (
					<div />
				)}
				{currentPart < partList.length ? (
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 1.0 }}
						onClick={() => setPart(currentPart + 1)}
						className="w-full h-full flex flex-row items-center justify-start gap-2 cursor-pointer">
						<div className="w-12 h-12 flex items-center justify-center">
							<ArrowRightIcon
								width={12}
								height={12}
								color="#f87171"
							/>
						</div>
						<div className="text-lg">{`Part ${currentPart + 1}`}</div>
					</motion.div>
				) : (
					<div />
				)}
			</div>
		</div>
	);
}
