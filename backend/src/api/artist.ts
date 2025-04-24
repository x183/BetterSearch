import { Router } from "express";
import { getAuthToken } from "./connect";

const artistRouter = Router();

artistRouter.get("/:name/:order/:type", async (req, res) => {
	const artistName = req.params.name;
	const order = req.params.order;
	const type = req.params.type;
	if (type !== "album" && type !== "single") {
		res.status(400).json({ error: "Invalid type" });
	}
	const token = await getAuthToken();
	console.log("Ordering artist albums by: ", order);
	let offset = 0;
	const albums = [];
	let latestAlbums = [];
	while (offset < 1 || latestAlbums.length > 1) {
		const data = await fetch(`https://api.spotify.com/v1/artists/${artistName}/albums?include_groups=${type}&market=SE&limit=50&offset=${offset}`, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${token}`
			}
		});
		if (!data.ok) {
			if (albums.length === 0)
				res.status(500).json({ error: "Failed to fetch artist albums" });
			break;
		}
		const json = await data.json();
		latestAlbums = json.items;
		albums.push(...latestAlbums);
		offset += 50;
	}
	if (order === "asc") {
		albums.sort((a, b) => (new Date(a.release_date).getTime() - new Date(b.release_date).getTime()));
	} else {
		albums.sort((a, b) => (new Date(b.release_date).getTime() - new Date(a.release_date).getTime()));
	}
	res.status(200).json(albums);
})

export default artistRouter;