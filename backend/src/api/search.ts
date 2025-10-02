import { Router } from "express";
const searchRouter = Router();
import { getAuthToken } from "./connect";

searchRouter.get("/artist/:name", async (req, res) => {
	const artistName = req.params.name;
	const token = await getAuthToken();
	console.log("Time to search for artist: ", artistName);
	await fetch(
		`https://api.spotify.com/v1/search/?q=${artistName}&type=artist`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch artist");
			}
			return response.json();
		})
		.then((data) => {
			const artists = data.artists.items;
			console.log(artists);
			return artists.map((artist: any) => ({
				href: artist.href,
				name: artist.name,
				images: artist.images,
			}));
		})
		.then((data) => res.status(200).json(data));
});

searchRouter.get("/album/:name", async (req, res) => {
	const albumName = req.params.name;
	const token = await getAuthToken();
	console.log("Time to search for album: ", albumName);
	await fetch(`https://api.spotify.com/v1/search/?q=${albumName}&type=album`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch artist");
			}
			return response.json();
		})
		.then((data) => {
			console.log(data.albums.items[0]);
			res.status(200).json(
				data.albums.items.map((album: any) => ({
					name: album.name,
					artists: album.artists.map((artist: any) => ({
						name: artist.name,
						link: artist.href,
					})),
					images: album.images,
					release_date: album.release_date,
				})),
			);
		});
});

searchRouter.get("/song/:name", async (req, res) => {
	const songName = req.params.name;
	const token = await getAuthToken();
	console.log("Time to search for album: ", songName);
	await fetch(`https://api.spotify.com/v1/search/?q=${songName}&type=song`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch artist");
			}
			return response.json();
		})
		.then((data) => res.status(200).json(data));
});

export default searchRouter;
