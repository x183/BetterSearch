"use client";
import { getSearchResults } from "@/fetches/callApi";
import { Album, Artist } from "@/types/dataTypes";
import SearchType from "@/types/SearchType";

import { useState } from "react";

export const searchBar = (type: SearchType) => {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState<Artist[] | Album[]>([]);
	const [loading, setLoading] = useState(false);

	return {
		results: results,
		isLoading: loading,
		bar: (
			<input
				type="text"
				onChange={(ne) => {
					setSearch(ne.target.value);
				}}
				onKeyDown={(key) => {
					if (key.key === "Enter") {
						setLoading(true);
						getSearchResults(search, type).then((res) => {
							console.log(res);
							setResults(res);
							setLoading(false);
						});
					}
				}}
			/>
		),
	};
};
