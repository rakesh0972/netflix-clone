import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Link } from 'react-router-dom';

const Thumbnail = ({ movie }) => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal
				className="bg-red"
				opened={opened}
				onClose={close}
				withCloseButton={false}
				centered
				style={{
					backgroundColor: 'red',
				}}
				size="lg"
				transitionProps={{
					transition: 'fade',
					duration: 300,
					timingFunction: 'linear',
				}}
			>
				<img
					src={`https://image.tmdb.org/t/p/w500/${
						movie?.backdrop_path || movie.poster_path
					}`}
					className="rounded-sm object-contain md:rounded w-full "
				/>
				<h1 className="font-semibold text-4xl py-3 text-black/70">
					{movie.title}
				</h1>

				<h1 className="font-semibold text-xl text-black/70 py-2">
					{movie.overview}
				</h1>

				{movie.genres?.map((g) => {
					return <p> {g.name}</p>;
				})}

				<div className="flex gap-6 py-3">
					<p className="font-semibold text-lg text-black/70">
						Release Date{movie?.release_date}
					</p>
					<p className="font-semibold text-lg text-black/70">
						Votes : {movie.vote_average}/10
					</p>
				</div>

				<Link to={`movie/${movie.id}`}>
					<button className=" bg-black text-white flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 border-none md:px-8 md:text-xl text-center">
						More Info
					</button>
				</Link>
			</Modal>

			<div
				className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] hover:scale-105"
				onClick={open}
			>
				<img
					src={`https://image.tmdb.org/t/p/w500/${
						movie?.backdrop_path || movie.poster_path
					}`}
					className="rounded-sm object-contain md:rounded"
				/>
			</div>
		</>
	);
};

export default Thumbnail;
