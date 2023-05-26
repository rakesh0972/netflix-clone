/* eslint-disable react/jsx-key */
import {
	IconCircleChevronLeft,
	IconCircleChevronRight,
	IconArrowLeft,
	IconArrowRight,
} from '@tabler/icons-react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Thumbnail from './Thumbnail';

import { Link } from 'react-router-dom';

const Row = ({ title, fetch }) => {
	const [movie, setMovie] = useState([]);

	const baseURL = 'https://api.themoviedb.org/3';
	useEffect(() => {
		const fetchData = async () => {
			// eslint-disable-next-line react/prop-types
			const response = await axios.get(`${baseURL}/${fetch}`);
			setMovie(response.data.results);
		};
		fetchData();
	}, [fetch]);

	const [isMoved, setIsMoved] = useState(false);
	const rowRef = useRef(null);

	const handleClick = (direction) => {
		setIsMoved(true);

		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;

			const scrollTo =
				direction === 'left'
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;

			rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
		}
	};

	return (
		<div className="h-40 space-y-0.5 md:space-y-2 z-20">
			<h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
				{title}
			</h2>
			<div className="group relative md:-ml-2">
				<IconArrowLeft
					className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 text-white/80 group-hover:opacity-100 ${
						!isMoved && 'hidden'
					}`}
					onClick={() => handleClick('left')}
				/>
				<div
					ref={rowRef}
					className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
				>
					{movie.map((m) => {
						return <Thumbnail movie={m} />;
					})}
				</div>
				<IconArrowRight
					className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 
					text-white/80 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
					onClick={() => handleClick('right')}
				/>
			</div>
		</div>
	);
};
// };

export default Row;
