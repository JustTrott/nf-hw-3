import React from "react";

export default function Footer() {
	return (
		<>
			<footer className="mt-16 text-gray-500 text-center">
				Credits: photos from{" "}
				<a href="https://loremflickr.com" className="underline">
					loremflickr.com
				</a>
				. Icons from{" "}
				<a href="https://heroicons.com" className="underline">
					heroicons.com
				</a>
				.
			</footer>

			<div className="text-center text-gray-400 mt-4">
				Made with ✨❤️ at nFactorial in 2024.
			</div>
		</>
	);
}
