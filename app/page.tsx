"use client";
import NavBar from "@/components/Navbar/Navbar";
import SlideIn from "@/components/AnimationWrapper/SlideIn";
import { motion } from "framer-motion";
import EaseIn from "@/components/AnimationWrapper/EaseIn";
import CourseCard from "@/components/Card/CourseCard";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<NavBar />
			<div className="w-full h-fit pt-14">
				<div className="w-full h-144 bg-primary md:p-8">
					<div
                      className="w-full h-full bg-center bg-general bg-contain bg-no-repeat rounded-lg border shadow-lg flex flex-col gap-4"
					/>
				</div>

				<div className="w-full h-fit bg-white flex justify-center items-center md:p-8">
					<div className=" h-fit bg-primary rounded-lg border shadow-lg flex flex-col justify-start items-center p-4 gap-8">
						<div className="w-fit h-fit text-4xl font-bold">
							<EaseIn>
								<div>
									Luyện thi IELTS Online miễn phí mỗi ngày
								</div>
							</EaseIn>
						</div>
						<div className="p-4 w-full h-fit text-justify text-xl font-semibold">
							<EaseIn delay={0.1}>
								<div>
									Engonow là một website luyện thi IELTS trực
									tuyến miễn phí với các câu hỏi và bài kiểm
									tra hỗ trợ người học luyện tập mọi lúc mọi
									nơi. Bạn có thể làm bài kiểm tra IELTS miễn
									phí với đầy đủ 4 kỹ năng nghe, nói, đọc,
									viết có đáp án giúp bạn tra cứu dễ dàng.
									Luyện tập IELTS ngay hôm nay!!!
								</div>
							</EaseIn>
						</div>

						<div className="w-full h-fit grid md:grid-cols-3 gap-4 ">
							<CourseCard
								title="IELTS Reading"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus mollis tempor. Maecenas sit amet scelerisque ex."
								bg="background/reading.png"
								path="\reading"
							/>
							<CourseCard
								title="IELTS Listening"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus mollis tempor. Maecenas sit amet scelerisque ex."
								bg="background/listening.jpg"
								path="\listening"
							/>
							<CourseCard
								title="IELTS Writing"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus mollis tempor. Maecenas sit amet scelerisque ex."
								bg="background/writing.jpg"
								path="\writing"
							/>
							<CourseCard
								title="IELTS Speaking"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus mollis tempor. Maecenas sit amet scelerisque ex."
								bg="background/speaking.jpeg"
								path="\speaking"
							/>
						</div>
					</div>
				</div>

				<div className="w-full h-fit bg-primary p-8"></div>
			</div>
		</>
	);
}
