import React from "react";
import Image from "next/image";

interface PostProps {
	id: string;
	author: string;
	topic: string;
	date: string;
	title: string;
	description: string;
}

export default function PostItem({
	id,
	author,
	topic,
	date,
	title,
	description,
}: PostProps) {
	return (
		<>
			<div className="flex flex-col lg:flex-row lg:justify-between">
				<div className="lg:space-y-[70px] max-w-[755px] lg:mr-8">
					<div className="lg:space-y-8">
						<div className="flex items-center text-sm text-gray-500 mb-2 gap-1">
							<span className="text-black">{author}</span>
							<span>in</span>
							<span className="text-black">{topic}</span>
							<span className="mx-1">·</span>
							<span>{date}</span>
						</div>
						<div className="lg:space-y-12">
							<h2 className="text-3xl font-bold mb-2">{title}</h2>
							<p className="text-gray-700 mb-4">{description}</p>
						</div>
					</div>
					<div className="flex items-center">
						<div className="bg-gray-300 text-black text-xs font-bold px-2 py-1 rounded-full">
							JavaScript
						</div>
						<span className="text-sm text-gray-500 ml-2">
							12 min read
						</span>
						<div className="flex items-center ml-auto space-x-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<rect
									x="0"
									y="0"
									width="24"
									height="24"
									fill="#E1E0E6"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<rect
									x="0"
									y="0"
									width="24"
									height="24"
									fill="#E1E0E6"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<rect
									x="0"
									y="0"
									width="24"
									height="24"
									fill="#E1E0E6"
								/>
							</svg>
						</div>
					</div>
				</div>
				<Image
					src="https://loremflickr.com/265/265"
					alt="Placeholder"
					className="w-[265px] h-[265px] flex self-center mt-4 lg:mt-0"
				/>
			</div>

			<hr className="my-4 border-t border-gray-300" />
		</>
	);
}
