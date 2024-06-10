"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./components/PostList";

interface PostProps {
	id: string;
	author: string;
	topic: string;
	date: string;
	title: string;
	description: string;
}

export default function Home() {
	const [posts, setPosts] = useState<PostProps[]>([]); // State to store fetched posts

	useEffect(() => {
		const posts: PostProps[] = [];
		const fetchPosts = async () => {
			const response = await axios.get(
				"https://dummyjson.com/posts?limit=5"
			);
			const rawPosts = response.data.posts;
			// for each post, add a new property called author with a value of firstName + lastName from dummyjson.com/users/{post.userId}
			for (const post of rawPosts) {
				const userResponse = await axios.get(
					`https://dummyjson.com/users/${post.userId}`
				);
				const newPost: PostProps = {
					id: post.id,
					title: post.title,
					author: `${userResponse.data.firstName} ${userResponse.data.lastName}`,
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deleniti officiis error iusto? Facilis sapiente saepe, quisquam ad",
					topic: "Random Topic",
					date: "7 July",
				};
				posts.push(newPost);
			}
			setPosts(posts); // Assuming API returns { posts: [...] }
		};

		fetchPosts();
	}, []); // Empty dependency array ensures this runs once on mount

	if (posts.length === 0) {
		return <div className="max-w-4xl mx-auto py-12 px-4">Loading...</div>;
	}

	return (
		<div className="max-w-4xl mx-auto py-12 px-4">
			<h1 className="text-5xl font-bold mb-8">Hello, world!</h1>

			<PostList posts={posts} />
		</div>
	);
}
