import { Router } from "express";
const playRouter = Router();
import { getAuthToken } from "./connect";

playRouter.get("/album/:id", async (req, res) => {
	const albumId = req.params.id;
	const token = await getAuthToken();
	console.log("Time to start playing album: ", albumId);
	await fetch(`https://api.spotify.com/v1/me/player/play`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${token}`,
			ContentType: "application/json",
		},
		body: JSON.stringify({
			context_uri: albumId,
			position_ms: 0,
		}),
	})
		.then((response) => {
			if (!(response.status == 204)) {
				console.log(response);
				throw new Error(`Failed to play music: ${response}`);
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

export default playRouter;
