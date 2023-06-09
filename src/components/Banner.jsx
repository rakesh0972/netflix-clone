// import axios from 'axios';
import Request from '../Request/Request';
import { useState, useEffect } from 'react';
import axios from '../Services/instance';
import { Link } from 'react-router-dom';
import { IconPlayerPlayFilled, IconInfoSmall } from '@tabler/icons-react';

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(`${Request.fetchHorrorMovies}`);

			setMovie(
				response.data.results[
					Math.floor(Math.random() * response.data.results.length - 1)
				]
			);
		};
		fetchData();
	}, []);
	return (
		<div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 text-white/90">
			<div className="absolute top-0 left-0 h-[95vh] w-full bg-cover -z-10 ">
				<img
					src={`https://image.tmdb.org/t/p/original/${
						movie?.backdrop_path || movie.poster_path
					}`}
					className="w-full"
				/>
			</div>
			<h1 className="text-2xl md:text-4xl lg:text-7xl ">
				{movie?.title || movie?.name || movie?.original_name}
			</h1>
			<p className="max-w-xs text-xs md:max-w-lg md:text-2xl lg:max-w-2xl drop-shadow-2xl">
				{movie?.overview}
			</p>

			<div className="flex gap-4">
				<button className="flex bg-white/90 text-black items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl">
					{' '}
					<IconPlayerPlayFilled />
					Play
				</button>
				<Link to={`movie/${movie?.id}`}>
					<button className=" bg-black/80 text-white flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl">
						{' '}
						<IconInfoSmall />
						More Info
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Banner;
