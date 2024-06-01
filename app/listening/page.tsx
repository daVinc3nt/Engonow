"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import listeningTest from "@/public/listening-test/listeningTest.json";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";
import CustomDropdown from "@/components/Common/Dropdown";
import { FaHeadphones } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function Listening() {
    const [time,setTime] = useState(40)
    const listTest =listeningTest.listeningtest;
    const router = useRouter()
	return (
		<div className="p-5">
			<div className="w-full fixed p-2 h-fit  ">
				<div
					onClick={() => router.push("/")}
					className="active:scale-125 duration-300 h-fit w-fit p-1 rounded-full bg-red-400 text-white">
					<FaArrowLeft className=" h-5 w-5" />
				</div>
			</div>
			<div className="flex flex-col gap-5 md:p-20 items-center">
				{listTest.map((element, key) => (
					<React.Fragment key={key}>
						<div
							className="border-2 hover:scale-[1.02] hover:border-red-400 rounded-xl w-2/3 p-4 
                            text-xl uppercase flex flex-col md:flex-row items-center justify-between
                            gap-2 duration-300">
							<div className="flex gap-5 flex-col md:flex-row items-center">
								<FaHeadphones className="w-10 h-10 text-red-500" />
								{element.testName}
							</div>
							<div className="flex gap-2">
								<CustomDropdown
									label="Chọn thời gian(phút)"
									options={[20, 30, 40, 50, 60, 70, 80, 90]}
									selectedOption={`${time} phút`}
									onSelectOption={(value) => {
										setTime(value);
									}}
								/>
								<div
									onClick={() =>
										router.push(`/listening/${key}/${time}`)
									}
									className="h-fit active:scale-110 w-fit bg-red-400 text-white rounded-full p-2">
									<FaArrowRight />
								</div>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
