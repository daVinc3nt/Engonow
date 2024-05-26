"use client";
import { useState } from "react";
import ReadingAnswer from "./components/ReadingAnswer/ReadingAnswer";
import Header from "./components/ReadingHeader/ReadingHeader";

import {
	ReadingTest,
	Multiple_Choice_Question,
	Part,
	QuestionType,
	QuestionGroup,
	True_False_Question,
	Fill_Question,
} from "./components/ReadingInterface";
import ReadingParagraph from "./components/ReadingParagraph/ReadingParagraph";
import ReadingQuestionList from "./components/ReadingQuestionList/ReadingQuestionList";

export default function Reading() {
	const [currentPart, setPart] = useState<number>(1);
	const part = readingTest1.partList[currentPart - 1];

	const [highLight, setHighLight] = useState<boolean>(false);
	const [highLightRange, setHighLightRange] = useState<Range[][]>([[]]);

	const [answer, setAnswer] = useState<string[]>(
		Array(readingTest1.numberOfQuestion).fill("")
	);

	return (
		<div className="w-full h-full flex flex-col flex-shrink gap-2 p-2 max-lg:h-fit">
			<div className="h-full max-lg:h-fit bg-white border shadow-md shadow-gray-300 rounded-lg flex flex-col gap-4 p-4 overflow-hidden">
				<div className="w-full h-fit">
					<Header value={highLight} setValue={setHighLight} />
					<div className="w-full h-fit">
						<h1 className="text-3xl font-bold">{`Part ${currentPart}`}</h1>
						<div className="w-full text-lg font-bold">{`Reading the paragraph below and answer question ${part.startQuestion} - ${part.endQuestion}`}</div>
					</div>
				</div>
				<div className="w-full h-full grid grid-cols-12 overflow-scroll lg:overflow-hidden">
					<ReadingParagraph
						highLight={highLight}
						title={readingTest1.partList[currentPart - 1].title}
						paragraph={
							readingTest1.partList[currentPart - 1].paragraph
						}
					/>

					<ReadingAnswer
						part={readingTest1.partList[currentPart - 1]}
						answer={answer}
						setAnswer={setAnswer}
					/>
				</div>
			</div>
			<ReadingQuestionList
				answer={answer}
				currentPart={currentPart}
				setPart={setPart}
				partList={readingTest1.partList}
			/>
		</div>
	);
}

const tf1: True_False_Question = {
	questionType: QuestionType.True_Fasle,
	questionNumber: 1,
	question:
		"Polar bears suffer from various health problems due to the build-up of fat under their skin.",
};
const tf2: True_False_Question = {
	questionType: QuestionType.True_Fasle,
	questionNumber: 2,
	question:
		"The study done by Liu and his colleagues compared different groups of polar bears.",
};
const tf3: True_False_Question = {
	questionType: QuestionType.True_Fasle,
	questionNumber: 3,
	question:
		"Liu and colleagues were the first researchers to compare polar bears and brown bears genetically.",
};
const tf4: True_False_Question = {
	questionType: QuestionType.True_Fasle,
	questionNumber: 4,
	question:
		"Polar bears are able to control their levels of 'bad' cholesterol by genetic means.",
};
const tf5: True_False_Question = {
	questionType: QuestionType.True_Fasle,
	questionNumber: 5,
	question:
		"Female polar bears are able to survive for about six months without food.",
};
const tf6: True_False_Question = {
	questionType: QuestionType.True_Fasle,
	questionNumber: 6,
	question:
		"It was found that the bones of female polar bears were very weak when they came out of their dens in spring.",
};
const tf7: True_False_Question = {
	questionType: QuestionType.True_Fasle,
	questionNumber: 7,
	question:
		"The polar bear's mechanism for increasing bone density could also be used by people one day.",
};
const group1: QuestionGroup = {
	startQuestion: 1,
	endQuestion: 7,
	description:
		"Choose <b>TRUE</b> if the statement agrees with the information given in the text, chose <b>FALSE</b> if the statement contradicts the information, or choose <b>NOT GIVEN</b> if there is no information on this.",
	questionList: [tf1, tf2, tf3, tf4, tf5, tf6, tf7],
};

const f8: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 8,
};
const f9: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 9,
};
const f10: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 10,
};
const f11: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 11,
};
const f12: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 12,
};
const f13: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 13,
};
const group2: QuestionGroup = {
	startQuestion: 8,
	endQuestion: 13,
	description: `Choose <b>ONE WORD ONLY</b> from the passage for each answer.
	Write your answers in boxes <b>8 - 13</b> on your answer sheet.`,
	paragraph: `<b>Reasons why polar bears should be protected</b>
People think of bears as unintelligent and ___<b>8</b>___ .
However, this may not be correct. For example:
● In Tennoji Zoo, a bear has been seen using a branch as a ___<b>9</b>___ .
	This allowed him to knock down some ___<b>10</b>___ .
● A wild polar bear worked out a method of reaching a platform where a ___<b>11</b>___ was located.
● Polar bears have displayed behaviour such as conscious manipulation of objects and activity similar to a ___<b>12</b>___ .
Bears may also display emotions. For example:
● They may make movements suggesting ___<b>13</b>___ if disappointed when hunting.
● They may form relationships with other species.`,
	questionList: [f8, f9, f10, f11, f12, f13],
};

const part1: Part = {
	partNumber: 1,
	startQuestion: 1,
	endQuestion: 13,
	title: "Why we need to protect polar bears",
	paragraph: `Polar bears are being increasingly threatened by the effects of climate change, but their disappearance could have far-reaching consequences. They are uniquely adapted to the extreme conditions of the Arctic Circle, where temperatures can reach -40°C. One reason for this is that they have up to 11 centimetres of fat underneath their skin. Humans with comparative levels of adipose tissue would be considered obese and would be likely to suffer from diabetes and heart disease. Yet the polar bear experiences no such consequences.

	A 2014 study by Shi Ping Liu and colleagues sheds light on this mystery. They compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears. This allowed them to determine the genes that have allowed polar bears to survive in one of the toughest environments on Earth. Liu and his colleagues found the polar bears had a gene known as APoB, which reduces levels of low-density lipoproteins (LDLs) - a form of 'bad' cholesterol. In humans, mutations of this gene are associated with increased risk of heart disease. Polar bears may therefore be an important study model to understand heart disease in humans.
	
	The genome of the polar bear may also provide the solution for another condition, one that particularly affects our older generation: osteoporosis. This is a disease where bones show reduced density, usually caused by insufficient exercise, reduced calcium intake or food starvation. Bone tissue is constantly being remodelled, meaning that bone is added or removed, depending on nutrient availability and the stress that the bone is under. Female polar bears, however, undergo extreme conditions during every pregnancy. Once autumn comes around, these females will dig maternity dens in the snow and will remain there throughout the winter, both before and after the birth of their cubs. This process results in about six months of fasting, where the female bears have to keep themselves and their cubs alive, depleting their own calcium and calorie reserves. Despite this, their bones remain strong and dense.
	
	Physiologists Alanda Lennox and Allen Goodship found an explanation for this paradox in 2008. They discovered that pregnant bears were able to increase the density of their bones before they started to build their dens. In addition, six months later, when they finally emerged from the den with their cubs, there was no evidence of significant loss of bone density. Hibernating brown bears do not have this capacity and must therefore resort to major bone reformation in the following spring. If the mechanism of bone remodelling in polar bears can be understood, many bedridden humans, and even astronauts, could potentially benefit.
	
	The medical benefits of the polar bear for humanity certainly have their importance in our conservation efforts, but these should not be the only factors taken into consideration. We tend to want to protect animals we think are intelligent and possess emotions, such as elephants and primates. Bears, on the other hand, seem to be perceived as stupid and in many cases violent. And yet anecdotal evidence from the field challenges those assumptions, suggesting for example that polar bears have good problem-solving abilities. A male bear called GoGo in Tennoji Zoo, Osaka, has even been observed making use of a tool to manipulate his environment. The bear used a tree branch on multiple occasions to dislodge a piece of meat hung out of his reach. Problem-solving ability has also been witnessed in wild polar bears, although not as obviously as with GoGo. A calculated move by a male bear involved running and jumping onto barrels in an attempt to get to a photographer standing on a platform four metres high.
	
	In other studies, such as one by Alison Ames in 2008, polar bears showed deliberate and focused manipulation. For example, Ames observed bears putting objects in piles and then knocking them over in what appeared to be a game. The study demonstrates that bears are capable of agile and thought-out behaviours. These examples suggest bears have greater creativity and problem-solving abilities than previously thought.
	
	As for emotions, while the evidence is once again anecdotal, many bears have been seen to hit out at ice and snow - seemingly out of frustration - when they have just missed out on a kill. Moreover, polar bears can form unusual relationships with other species, including playing with the dogs used to pull sleds in the Arctic. Remarkably, one hand-raised polar bear called Agee has formed a close relationship with her owner Mark Dumas to the point where they even swim together. This is even more astonishing since polar bears are known to actively hunt humans in the wild.
	If climate change were to lead to their extinction, this would mean not only the loss of potential breakthroughs in human medicine, but more importantly, the disappearance of an intelligent, majestic animal.`,
	groupList: [group1, group2],
};

const f14: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 14,
	question: "<b>A</b>",
};
const f15: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 15,
	question: "<b>B</b>",
};
const f16: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 16,
	question: "<b>C</b>",
};
const f17: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 17,
	question: "<b>D</b>",
};
const f18: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 18,
	question: "<b>E</b>",
};
const f19: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 19,
	question: "<b>F</b>",
};
const f20: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 20,
	question: "<b>G</b>",
};

const group3: QuestionGroup = {
	startQuestion: 14,
	endQuestion: 20,
	description: `This Reading Passage has seven paragraphs, <b>A-G</b>.

Choose the correct heading for each paragraph from the list of headings below.
Write the correct number, <b>i-ix</b>, in boxes <b>14-20</b> on your answer sheet.`,
	paragraph: `<b>List of Headings</b>

<b>i)</b>  The areas and artefacts within the pyramid itself
<b>ii)</b>  A difficult task for those involved
<b>iii)</b>  A king who saved his people
<b>iv)</b>  A single certainty among other less definite facts
<b>v)</b>  An overview of the external buildings and areas
<b>vi)</b>  A pyramid design that others copied
<b>vii)</b>  An idea for changing the design of burial structures
<b>viii)</b>  An incredible experience despite the few remains
<b>ix)</b>  The answers to some unexpected questions`,
	questionList: [f14, f15, f16, f17, f18, f19, f20],
};
const f21: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 21,
};
const f22: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 22,
};
const f23: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 23,
};
const f24: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 24,
};
const group4: QuestionGroup = {
	startQuestion: 21,
	endQuestion: 24,
	description: `Complete the notes below.

	Choose <b>ONE WORD ONLY</b> from the passage for each answer.
	
	Write your answers in boxes <b>21-24</b> on your answer sheet.`,
	paragraph: `<b>The Step Pyramid of Djoser</b>

The complex that includes the Step Pyramid and its surroundings is considered to be as big as an Egyptian ___<b>21</b>___ of the past. The area outside the pyramid included accommodation that was occupied by ___<b>22</b>___, along with many other buildings and features.
	
A wall ran around the outside of the complex and a number of false entrances were built into this. In addition, a long ___<b>23</b>___ encircled the wall. As a result, any visitors who had not been invited were cleverly prevented from entering the pyramid grounds unless they knew the ___<b>24</b>___ of the real entrance.`,
	questionList: [f21, f22, f23, f24],
};
const mc25_26: Multiple_Choice_Question = {
	questionType: QuestionType.Multiple_Choice,
	questionNumber: 25,
	question: `Which TWO of the following points does the writer make about King Djoser?`,
	choice: [
		"Initially he had to be persuaded to build in stone rather than clay.",
		"There is disagreement concerning the length of his reign.",
		"He failed to appreciate Imhotep’s part in the design of the Step Pyramid.",
		"A few of his possessions were still in his tomb when archaeologists found it.",
		"He criticised the design and construction of other pyramids in Egypt.",
	],
	numberOfChoice: 5,
	numberOfAnswer: 2,
};
const group5: QuestionGroup = {
	startQuestion: 25,
	endQuestion: 26,
	description: `Choose <b>TWO</b> letters, <b>A-E</b>.

Write the correct letters in boxes <b>25</b> and <b>26</b> on your answer sheet.`,
	questionList: [mc25_26],
};
const part2: Part = {
	partNumber: 2,
	startQuestion: 14,
	endQuestion: 26,
	title: "The Step Pyramid of Djoser",
	paragraph: `<b>A</b>
The pyramids are the most famous monuments of ancient Egypt and still hold enormous interest for people in the present day. These grand, impressive tributes to the memory of the Egyptian kings have become linked with the country even though other cultures, such as the Chinese and Mayan, also built pyramids. The evolution of the pyramid form has been written and argued about for centuries. However, there is no question that, as far as Egypt is concerned, it began with one monument to one king designed by one brilliant architect: the Step Pyramid of Djoser at Saqqara.
	
<b>B</b>
Djoser was the first king of the Third Dynasty of Egypt and the first to build in stone. Prior to Djoser's reign, tombs were rectangular monuments made of dried clay brick, which covered underground passages where the deceased person was buried. For reasons which remain unclear, Djoser's main official, whose name was Imhotep, conceived of building a taller, more impressive tomb for his king by stacking stone slabs on top of one another, progressively making them smaller, to form the shape now known as the Step Pyramid. Djoser is thought to have reigned for 19 years, but some historians and scholars attribute a much longer time for his rule, owing to the number and size of the monuments he built.
	
<b>C</b>
The Step Pyramid has been thoroughly examined and investigated over the last century, and it is now known that the building process went through many different stages. Historian Marc Van de Mieroop comments on this, writing 'Much experimentation was involved, which is especially clear in the construction of the pyramid in the center of the complex. It had several plans … before it became the first Step Pyramid in history, piling six levels on top of one another … The weight of the enormous mass was a challenge for the builders, who placed the stones at an inward incline in order to prevent the monument breaking up.'
	
<b>D</b>
When finally completed, the Step Pyramid rose 62 meters high and was the tallest structure of its time. The complex in which it was built was the size of a city in ancient Egypt and included a temple, courtyards, shrines, and living quarters for the priests. It covered a region of 16 hectares and was surrounded by a wall 10.5 meters high. The wall had 13 false doors cut into it with only one true entrance cut into the south-east corner; the entire wall was then ringed by a trench 750 meters long and 40 meters wide. The false doors and the trench were incorporated into the complex to discourage unwanted visitors. If someone wished to enter, he or she would have needed to know in advance how to find the location of the true opening in the wall. Djoser was so proud of his accomplishment that he broke the tradition of having only his own name on the monument and had Imhotep's name carved on it as well.
	
<b>E</b>
The burial chamber of the tomb, where the king's body was laid to rest, was dug beneath the base of the pyramid, surrounded by a vast maze of long tunnels that had rooms off them to discourage robbers. One of the most mysterious discoveries found inside the pyramid was a large number of stone vessels. Over 40,000 of these vessels, of various forms and shapes, were discovered in storerooms off the pyramid's underground passages. They are inscribed with the names of rulers from the First and Second Dynasties of Egypt and made from different kinds of stone. There is no agreement among scholars and archaeologists on why the vessels were placed in the tomb of Djoser or what they were supposed to represent. The archaeologist Jean-Philippe Lauer, who excavated most of the pyramid and complex, believes they were originally stored and then give a 'proper burial' by Djoser in his pyramid to honor his predecessors. There are other historians, however, who claim the vessels were dumped into the shafts as yet another attempt to prevent grave robbers from getting to the king's burial chamber.
	
<b>F</b>
Unfortunately, all of the precautions and intricate design of the underground network did not prevent ancient robbers from finding a way in. Djoser's grave goods, and even his body, were stolen at some point in the past and all archaeologists found were a small number of his valuables overlooked by the thieves. There was enough left throughout the pyramid and its complex, however, to astonish and amaze the archaeologists who excavated it.
	
<b>G</b>
Egyptologist Miroslav Verner writes, 'Few monuments hold a place in human history as significant as that of the Step Pyramid in Saqqara … It can be said without exaggeration that this pyramid complex constitutes a milestone in the evolution of monumental stone architecture in Egypt and in the world as a whole.' The Step Pyramid was a revolutionary advance in architecture and became the archetype which all the other great pyramid builders of Egypt would follow.`,
	groupList: [group3, group4, group5],
};

const mc_27: Multiple_Choice_Question = {
	questionType: QuestionType.Multiple_Choice,
	questionNumber: 27,
	question: `The first paragraph tells us about`,
	choice: [
		"the kinds of jobs that will be most affected by the growth of AI.",
		"the extent to which AI will after the nature of the work that people do.",
		"the proportion of the world’s labour force who will have jobs in AI in the future.",
		"the difference between ways that embodied and disembodied AI with impact on workers.",
	],
	numberOfChoice: 4,
	numberOfAnswer: 1,
};
const mc_28: Multiple_Choice_Question = {
	questionType: QuestionType.Multiple_Choice,
	questionNumber: 28,
	question:
		"According to the second paragraph, what is Stella Pachidi’s view of the ‘knowledge economy’?",
	choice: [
		"It is having an influence on the number of jobs available.",
		"It is changing people’s attitudes towards their occupations.",
		"It is the main reason why the production sector is declining.",
		"It is a key factor driving current developments in the workplace",
	],
	numberOfChoice: 4,
	numberOfAnswer: 1,
};
const mc_29: Multiple_Choice_Question = {
	questionType: QuestionType.Multiple_Choice,
	questionNumber: 29,
	question: "What did Pachidi observe at the telecommunications company?",
	choice: [
		"staff disagreeing with the recommendations of AI.",
		"staff feeling resentful about the intrusion of AI in their work.",
		"staff making sure that AI produces the results that they want.",
		"staff allowing AI to carry out tasks they ought to do themselves.",
	],
	numberOfChoice: 4,
	numberOfAnswer: 1,
};
const mc_30: Multiple_Choice_Question = {
	questionType: QuestionType.Multiple_Choice,
	questionNumber: 30,
	question: "In his recently published research, Ewan McGaughey",
	choice: [
		"challenges the idea that redundancy is a negative thing.",
		"shows the profound effect of mass unemployment on society.",
		"highlights some differences between past and future job losses.",
		" illustrates how changes in the job market can be successfully handled.",
	],
	numberOfChoice: 4,
	numberOfAnswer: 1,
};

const group6: QuestionGroup = {
	startQuestion: 27,
	endQuestion: 30,
	description: `Choose the correct letter, A, B, C or D.

Write the correct letter in boxes 27-30 on your answer sheet.`,
	questionList: [mc_27, mc_28, mc_29, mc_30],
};

const f31: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 31,
};
const f32: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 32,
};
const f33: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 33,
};
const f34: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 34,
};

const group7: QuestionGroup = {
	startQuestion: 31,
	endQuestion: 34,
	description: `Complete the summary using the list of words, <b>A-G</b>, below.

Write the correct letter, <b>A-G</b>, in boxes <b>31-34</b> on your answer sheet.`,
	paragraph: `Stella Pachidi of Cambridge Judge Business School has been focusing on the ‘algorithmication’ of jobs which rely not on production but on ___<b>31</b>___ .

While monitoring a telecommunications company, Pachidi observed a growing ___<b>32</b>___ on the recommendations made by AI, as workers begin to learn through the ‘algorithm’s eyes’. Meanwhile, staff are deterred from experimenting and using their own ___<b>33</b>___ , and are therefore prevented from achieving innovation.

To avoid the kind of situations which Pachidi observed, researchers are trying to make AI’s decision-making process easier to comprehend, and to increase users’ ___<b>34</b>___ with regard to the technology. 

<b>A</b>   pressure                <b>B</b>   satisfaction            <b>C</b>   intuition

<b>D</b>   promotion             <b>E</b>   reliance                  <b>F</b>   confidence

<b>G</b>   information`,
	questionList: [f31, f32, f33, f34],
};

const f35: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 35,
	question: `Greater levels of automation will not result in lower employment.`,
};
const f36: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 36,
	question: `There are several reasons why AI is appealing to businesses.`,
};
const f37: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 37,
	question: `AI’s potential to transform people’s lives has parallels with major cultural shifts which occurred in previous eras.`,
};
const f38: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 38,
	question: `It is important to be aware of the range of problems that AI causes.`,
};
const f39: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 39,
	question: `People are going to follow a less conventional career path than in the past.`,
};
const f40: Fill_Question = {
	questionType: QuestionType.Fill,
	questionNumber: 40,
	question: `Authorities should take measures to ensure that there will be adequately paid work for everyone.`,
};

const group8: QuestionGroup = {
	startQuestion: 35,
	endQuestion: 40,
	description: `Look at the following statements (Questions <b>35-40</b>) and the list of people below.
Match each statement with the correct person, <b>A, B or C</b>.
Write the correct letter, <b>A, B or C</b>, in boxes <b>35-40</b> on your answer sheet.
	
<b>NB</b>   You may use any letter more than once.`,
	paragraph: `<b>List of people</b>
	
<b>A</b>     Stella Pachidi 
	
<b>B</b>     Hamish Low
	
<b>C</b>     Ewan McGaughey`,
	questionList: [f35, f36, f37, f38, f39, f40],
};

const part3: Part = {
	partNumber: 3,
	startQuestion: 27,
	endQuestion: 40,
	title: "The future of work",
	paragraph: `According to a leading business consultancy, 3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation - or -embodied artificial intelligence’ (AI) – is one aspect of the disruptive effects of technology on the labour market. ‘Disembodied AI’, like the algorithms running in our smartphones, is another.

Dr Stella Pachidi from Cambridge Judge Business School believes that some of the most fundamental changes are happening as a result of the ‘algorithmication’ of jobs that are dependent on data rather than on production – the so-called knowledge economy. Algorithms are capable of learning from data to undertake tasks that previously needed human judgement, such as reading legal contracts, analysing medical scans and gathering market intelligence.
	
‘In many cases, they can outperform humans,’ says Pachidi. ‘Organisations are attracted to using algorithms because they want to make choices based on what they consider is “perfect information”, as well as to reduce costs and enhance productivity.’
	
‘But these enhancements are not without consequences,’ says Pachidi. ‘If routine cognitive tasks are taken over by AI, how do professions develop their future experts?’ she asks. ‘One way of learning about a job is “legitimate peripheral participation” – a novice stands next to experts and learns by observation. If this isn’t happening, then you need to find new ways to learn.’
	
Another issue is the extent to which the technology influences or even controls the workforce. For over two years, Pachidi monitored a telecommunications company. ‘The way telecoms salespeople work is through personal and frequent contact with clients, using the benefit of experience to assess a situation and reach a decision. However, the company had started using a[n] … algorithm that defined when account managers should contact certain customers about which kinds of campaigns and what to offer them.’
	
The algorithm – usually build by external designers – often becomes the keeper of knowledge, she explains. In cases like this, Pachidi believes, a short-sighted view begins to creep into working practices whereby workers learn through the ‘algorithm’s eyes’ and become dependent on its instructions. Alternative explorations – where experimentation and human instinct lead to progress and new ideas – are effectively discouraged.
	
Pachidi and colleagues even observed people developing strategies to make the algorithm work to their own advantage. ‘We are seeing cases where workers feed the algorithm with false data to reach their targets,’ she reports.
	
It’s scenarios like these that many researchers are working to avoid. Their objective is to make AI technologies more trustworthy and transparent, so that organisations and individuals understand how AI decisions are made. In the meantime, says Pachidi, ‘We need to make sure we fully understand the dilemmas that this new world raises regarding expertise, occupational boundaries and control.’
	
Economist Professor Hamish Low believes that the future of work will involve major transitions across the whole life course for everyone: ‘The traditional trajectory of full-time education followed by full-time work followed by a pensioned retirement is a thing of the past,’ says Low. Instead, he envisages a multistage employment life: one where retraining happens across the life course, and where multiple jobs and no job happen by choice at different stages.
	
On the subject of job losses, Low believes the predictions are founded on a fallacy: ‘It assumes that the number of jobs is fixed. If in 30 years, half of 100 jobs are being carried out by robots, that doesn’t mean we are left with just 50 jobs for humans. The number of jobs will increase: we would expect there to be 150 jobs.’
	
Dr Ewan McGaughey, at Cambridge’s Centre for Business Research and King’s College London, agrees that ‘apocalyptic’ views about the future of work are misguided. ‘It’s the laws that restrict the supply of capital to the job market, not the advent of new technologies that causes unemployment.’
	
His recently published research answers the question of whether automation, AI and robotics will mean a ‘jobless future’ by looking at the causes of unemployment. ‘History is clear that change can mean redundancies. But social policies can tackle this through retraining and redeployment.’
	
He adds: ‘If there is going to be change to jobs as a result of AI and robotics then I’d like to see governments seizing the opportunity to improve policy to enforce good job security. We can “reprogramme” the law to prepare for a fairer future of work and leisure.’ McGaughey’s findings are a call to arms to leaders of organisations, governments and banks to pre-empt the coming changes with bold new policies that guarantee full employment, fair incomes and a thriving economic democracy.
	
‘The promises of these new technologies are astounding. They deliver humankind the capacity to live in a way that nobody could have once imagined,’ he adds. ‘Just as the industrial revolution brought people past subsistence agriculture, and the corporate revolution enabled mass production, a third revolution has been pronounced. But it will not only be one of technology. The next revolution will be social.’`,
	groupList: [group6, group7, group8],
};

const readingTest1: ReadingTest = {
	readingTestID: "12345",
	numberOfQuestion: 40,
	duration: 60,
	partList: [part1, part2, part3],
};
