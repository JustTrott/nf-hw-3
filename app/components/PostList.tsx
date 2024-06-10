import React from "react";
import PostItem from "./PostItem";
import Link from "next/link";

interface PostProps {
	id: string;
	author: string;
	topic: string;
	date: string;
	title: string;
	description: string;
}

interface PostListProps {
	posts: PostProps[];
}
export default function PostList({ posts }: PostListProps) {
	return (
		<div className="space-y-12">
			{posts.map((post, index) => (
				<Link href={`/${post.id}`} key={index}>
					<PostItem {...post} />
				</Link>
			))}
		</div>
	);
}

// export default PostList;
