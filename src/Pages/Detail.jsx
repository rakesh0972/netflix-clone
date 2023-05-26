/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
const Detail = () => {
	const { id } = useParams();
	console.log(id);
	// const APIKEY = '9541def1c14f6ab9d17455a94e86467f';

	// const baseURL = 'https://api.themoviedb.org/3';
	const [movie, setMovie] = useState({});
	useEffect(() => {
		const getData = async () => {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=9541def1c14f6ab9d17455a94e86467f`
			);
			// console.log(response);
			setMovie(response.data);
			console.log(movie);
		};
		getData();
		console.log(movie);
	}, []);

	return (
		<div>
			<div className=" text-white/80 bg-gradient-to-b from-white/10  via-black/60 to-black h-[180vh]  ">
				<img
					src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
					className="h-full w-screen bg-auto relative -z-10 object-cover"
				/>
				<div className="detail absolute bottom-2">
					<div className="detail-title px-20 md:px-36">
						<h1 className="text-8xl font-medium font-main py-4 text-white">
							{movie?.title || movie?.name || movie?.original_name}
							<br />
							<p className="text-4xl font-medium font-main py-4 text-white/80">
								{movie?.tagline}
							</p>
						</h1>

						<p className="text-2xl font-medium py-4">{movie.overview}</p>
						<p className="text-xl font-medium py-1">
							{' '}
							Release Date : {movie?.release_date}
						</p>

						<div className="genres flex gap-6 py-1">
							<h1 className="text-xl font-medium">Genres</h1>
							{movie.genres?.map((g) => {
								return <p className="text-xl font-medium">{g.name}</p>;
							})}
						</div>
						<p className="text-xl font-medium py-1">
							{' '}
							Vote Average : {movie?.vote_average}/10
						</p>
						<p className="text-xl font-medium py-1">
							{' '}
							Vote Count : {movie?.vote_count}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
