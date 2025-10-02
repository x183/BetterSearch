import SearchType from "@/types/SearchType";

export const getSearchResults = async (query: string, type: SearchType) => {
	const res = await fetch(`api/search/${type}/${query}`, {
		method: "GET",
	});
	if (!res.ok) {
		console.log("Failed to fetch search results");
		return "";
	}
	const jsData = await res.json();
	return jsData;
}