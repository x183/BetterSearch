"use client";
import { searchBar } from "./searchBar";
import { SearchResultList } from "./searchResultList";
import { typeFilter } from "./typeFilter";

export const Search = () => {
	let { type, filter } = typeFilter();
	let { results, isLoading, bar } = searchBar(type);
	return (
		<>
			{bar}
			{filter}
			{isLoading ? "" : <SearchResultList result={results} type={type} />}
		</>
	);
};
