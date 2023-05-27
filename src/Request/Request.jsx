const APIKEY = '9541def1c14f6ab9d17455a94e86467f';

const Request = {
	fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US&with_networks=213`,
	fetchActionMovies: `/movie/popular/?api_key=${APIKEY}&with_genres=28`,
	fetchComedyMovies: `/movie/popular/?api_key=${APIKEY}&with_genres=35`,
	fetchHorrorMovies: `/movie/popular/?api_key=${APIKEY}&with_genres=27`,
	fetchRomanceMovies: `/movie/popular/?api_key=${APIKEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=99`,
};

export default Request;
