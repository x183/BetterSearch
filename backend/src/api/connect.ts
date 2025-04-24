import fs from 'fs';

const getAuthToken = async () => {
	const file = fs.readFileSync('data/token.json', 'utf-8');
	const data = JSON.parse(file.toString());
	console.log(data);
	if (Date.now() > data.expires_at)
		return await refreshToken();
	return data.access_token;
}

const refreshToken = async () => {
	const params = new URLSearchParams();
	params.append("client_id", process.env.CLIENT_ID || "");
	params.append("grant_type", "client_credentials");
	params.append("client_secret", process.env.CLIENT_SECRET || "");
	params.append("redirect_uri", "http://127.0.0.1:5173/callback");
	const response = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}, body: params
	})
	console.log(response.body);
	if (!response.ok) {
		throw new Error("Failed to refresh token");
	}
	const data = await response.json();
	const expires_at = Date.now() + data.expires_in * 1000;
	fs.writeFileSync('data/token.json', JSON.stringify({ ...data, expires_at }));
	return data.access_token;
}

export {
	getAuthToken
}