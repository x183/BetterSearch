"use client";
import SearchType from "@/types/SearchType";

import { useState } from "react";


export const typeFilter = () => {
	const [type, setType] = useState<SearchType>("artist");

	return {
		type: type,
		filter: (
			<select onChange={(e) => { setType(e.target.value as SearchType) }} value={type} >
				<option value="artist">Artist</option>
				<option value="album">Album</option>
				<option value="song">Song</option>
			</select>
		)
	}
}