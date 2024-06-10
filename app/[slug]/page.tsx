"use client";
import React from "react";
// import not found next
import { notFound } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface Post {
	id: string;
	author: string;
	topic: string;
	date: string;
	title: string;
	body: string;
	description: string;
}

interface PostProps {
	params: {
		slug: string;
	};
}

export default function Post({ params }: PostProps) {
	// const post = posts.find((post) => post.id === params.slug);
	const [post, setPost] = useState<Post | null>(null);

	useEffect(() => {
		const fetchPost = async () => {
			const response = await axios.get(
				`https://dummyjson.com/posts/${params.slug}`
			);
			if (response.status !== 200) {
				return notFound();
			}
			const rawPost = response.data;
			const userResponse = await axios.get(
				`https://dummyjson.com/users/${rawPost.userId}`
			);
			const post: Post = {
				id: rawPost.id,
				title: rawPost.title,
				topic: "Random Topic",
				date: "7 July",
				author: `${userResponse.data.firstName} ${userResponse.data.lastName}`,
				body: rawPost.body,
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deleniti officiis error iusto? Facilis sapiente saepe, quisquam ad",
			};
			setPost(post);
		};

		fetchPost();
	}, [params.slug]);

	if (!post) {
		return <div className="max-w-4xl mx-auto p-4">Loading...</div>;
	}

	return (
		<div className="min-h-screen ">
			<div className="max-w-4xl mx-auto p-4 h-[76px] md:h-[152px] flex items-center">
				<Link href="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="size-6 text-gray-500"
					>
						<path
							fillRule="evenodd"
							d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
							clipRule="evenodd"
						/>
					</svg>
				</Link>
			</div>
			<main className="max-w-4xl mx-auto p-4 flex flex-col gap-[70px]">
				<div className="flex">
					<Image
						src="https://loremflickr.com/64/64"
						alt="Author"
						className="rounded-full w-16 mr-4"
					/>
					<div className="flex flex-col gap-3 justify-around">
						<div className="text-black font-semibold">
							{post.author}
						</div>
						<div className="text-gray-400">
							{post.date} · 12 min read · Member-only
						</div>
					</div>
				</div>

				<h1 className="text-3xl font-bold">{post.title}</h1>
				<h2 className="text-xl text-gray-600">{post.description}</h2>

				<Image
					src="https://loremflickr.com/1120/480"
					alt="Laptop"
					className="w-full"
				/>

				<div className="space-y-6">
					<h3 className="text-2xl font-semibold">Subheader</h3>
					<p className="text-gray-700">{post.body}</p>
					<p className="text-gray-700">{post.body}</p>
					<p className="text-gray-700">{post.body}</p>
				</div>

				<div className="flex items-center">
					<div className="flex items-center mr-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-6 w-6 h-6 text-gray-500 mr-1"
						>
							<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
						</svg>

						<span>180</span>
					</div>
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-6  w-6 h-6 text-gray-500 mr-1"
						>
							<path
								fillRule="evenodd"
								d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
								clipRule="evenodd"
							/>
						</svg>

						<span>12</span>
					</div>
				</div>
			</main>
		</div>
	);
}
