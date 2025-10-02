"use client";

import { Album, Artist } from "@/types/dataTypes";
import { ArtistCard } from "./listObject/Artist";
import { AlbumCard } from "./listObject/Album";

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
				: type == "album"
					? result.map((album, key) => (
							<AlbumCard key={key} album={album} />
						))
					: type == "song"
						? result.map((song, key) => (
								<SongCard key={key} song={song} />
							))
						: ""}
		</>
	);
};
