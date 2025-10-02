"use client";

import { Album } from "@/types/dataTypes";
import Image from "next/image";

export const AlbumCard = (album: Album) => {
	const data: Album = album.album;
	console.log(data);
	return (
		<div>
			<Image
				src={data.images[1].url}
				width={300}
				height={300}
				alt={`Image of ${data.name}`}
			/>
			<h2>{data.name}</h2>
			<h4>
				By:{" "}
				{data.artists.length == 1
					? data.artists[0].name
					: data.artists.map((artist) => artist.name).join(", ")}
				{` (${data.release_date.split("-")[0]})`}
			</h4>
		</div>
	);
};
