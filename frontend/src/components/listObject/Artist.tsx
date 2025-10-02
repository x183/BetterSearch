"use client";

import { Artist } from "@/types/dataTypes";
import Image from "next/image";

export const ArtistCard = (artist: Artist) => {
	const data: Artist = artist.artist;
	return (
		<div>
			<Image
				src={data.images[2].url}
				width={160}
				height={160}
				alt={`Image of ${data.name}`}
			/>
			<h2>{data.name}</h2>
		</div>
	);
};
