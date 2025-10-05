"use client";

import { Album } from "@/types/dataTypes";
import Image from "next/image";
import styles from "./Card.module.css";

export const AlbumCard = (album: Album) => {
	const data: Album = album.album;
	console.log(data);
	return (
		<div className={styles.card}>
			<Image
				src={data.images[1].url}
				width={300}
				height={300}
				alt={`Image of ${data.name}`}
			/>
			<ul>
				<li>
					<h2 className={styles.cardHeader}>{data.name}</h2>
				</li>
				<li>
					<p>
						By:{" "}
						{data.artists.length == 1
							? data.artists[0].name
							: data.artists.map((artist) => artist.name).join(", ")}
						{` (${data.release_date.split("-")[0]})`}
					</p>
				</li>
			</ul>
		</div>
	);
};
