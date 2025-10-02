type Album = {
	name: string;
	artists: { name: string; link: string }[];
	images: { url: string; height: number; width: number }[];
	release_date: string;
};

type Artist = {
	name: string;
	link: string;
	images: { url: string; height: number; width: number }[];
};

type Song = {
	name: string;
	artists: { name: string; link: string }[];
	images: { url: string; height: number; width: number }[];
	release_date: string;
	album: Album;
};

export type { Album, Artist, Song };
