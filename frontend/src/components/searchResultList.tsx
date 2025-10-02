"use client";

import { Album, Artist } from "@/types/dataTypes";
import { ArtistCard } from "./listObject/Artist";

export const SearchResultList = ({
	result,
	type,
}: {
	result: Album[] | Artist[];
	type: string;
}) => {
	return (
		<>
			{type == "artist"
				? result.map((artist, key) => (
						<ArtistCard key={key} artist={artist} />
					))
				: ""}
		</>
	);
};
