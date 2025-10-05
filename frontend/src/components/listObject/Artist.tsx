"use client";

import { Artist } from "@/types/dataTypes";
import Image from "next/image";
import styles from "./Card.module.css";

const prettyNum = (num: number, short = true) => {
	const mil = 1000000;
	const kil = 1000;
	if (num > mil)
		return Math.round((num * 100) / mil) / 100 + (short ? "M" : " Million");
	if (num > kil)
		return Math.round((num * 10) / kil) / 10 + (short ? "K" : " Thousand");
};
export const ArtistCard = (artist: Artist) => {
	const data: Artist = artist.artist;
	return (
		<div className={styles.card}>
			<Image
				src={data.images[2].url}
				width={160}
				height={160}
				alt={`Image of ${data.name}`}
			/>
			<ul>
				<li>
					<h2 className={styles.cardHeader}>{data.name}</h2>
				</li>
				<li>
					<p>Followers: {prettyNum(data.followers, false)}</p>
				</li>
			</ul>
		</div>
	);
};
