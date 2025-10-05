type Album = {
	name: string;
	artists: { name: string; link: string }[];
	images: { url: string; height: number; width: number }[];
	release_date: string;
	uri: string;
};

type Artist = {
	name: string;
	link: string;
	uri: string;
	images: { url: string; height: number; width: number }[];
	followers: number;
};

type Song = {
	name: string;
	uri: string;
	artists: { name: string; link: string }[];
	images: { url: string; height: number; width: number }[];
	release_date: string;
	album: Album;
};

export type { Album, Artist, Song };
