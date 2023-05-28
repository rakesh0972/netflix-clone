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
			<div className="relative text-white/80 bg-black h-full pt-20 px-12 overflow-x-hidden md:flex">
				<img
					src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
					className=" h-1/2  object-cover md:w-1/2 "
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 opacity-50"></div>

				<div className="detail md:w-1/2">
					<div className="detail-title px-9 ">
						<h1 className="text-4xl font-semibold font-main py-4 text-white md:text-6xl">
							{movie?.title || movie?.name || movie?.original_name}
							<br />
							<p className="text-xl font-medium font-main pt-1 text-white/80 md:text-2xl">
								{movie?.tagline}
							</p>
						</h1>

						<p className="text-lg font-medium pb-4 md:text-xl">
							{movie.overview}
						</p>
						<p className="text-md font-medium py-1 md:text-lg">
							{' '}
							Release Date : {movie?.release_date}
						</p>

						<div className="genres flex flex-wrap gap-6 py-1">
							<h1 className="text-md  md:text-lg font-medium">Genres :</h1>
							{movie.genres?.map((g) => {
								return (
									<p className="text-md  md:text-lg font-medium  flex flex-wrap">
										{g.name}
									</p>
								);
							})}
						</div>
						<p className="text-md font-medium py-1">
							{' '}
							Vote Average : {Math.floor(movie?.vote_average)}/10
						</p>
						<p className="text-md font-medium py-1">
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
