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

export type { Album, Artist };
