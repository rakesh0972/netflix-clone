import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset;
			setIsScrolled(scrollTop > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		// <nav
		// 	className={`fixed w-full bg-red transition duration-500 ease-in-out ${
		// 		isScrolled ? 'bg-gray-900' : 'bg-transparent'
		// 	}`}
		// >
		// 	{' '}
		// 	<div className="flex py-4 items-center justify-between px-4 fixed w-full ">
		// 		<img
		// 			src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
		// 			alt=""
		// 			width={100}
		// 			height={100}
		// 			className="cursor-pointer object-contain"
		// 		/>

		// 		<ul className="flex text-sm font-light cursor-pointer text-[#e5e5e5] gap-6 ">
		// 			<li>Home</li>
		// 			<li>Movies</li>
		// 			<li>Tv series</li>
		// 			<li>New & Popular</li>
		// 			<li>My list</li>
		// 		</ul>
		// 		<div className="flex">
		// 			<img
		// 				src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
		// 				alt=""
		// 				height={40}
		// 				width={40}
		// 			/>
		// 		</div>
		// 	</div>
		// </nav>

		<nav
			className={`fixed top-0 w-full z-50 transition  duration-500 ${
				isScrolled ? 'bg-black' : 'bg-transparent'
			}`}
		>
			<div
				className="flex
			gap-7 py-3 px-5 justify-between"
			>
				<div
					className="
				flex
				gap-7 items-center justify-between
				"
				>
					<Link to="/">
						<img
							src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
							alt=""
							width={100}
							height={100}
							className="cursor-pointer object-contain"
						/>
					</Link>
					<ul className="flex hidden text-base font-light cursor-pointer text-[#e5e5e5] gap-6 md:flex ">
						<li className="hover:text-red transition-all ease-in 3ms">Home</li>
						<li className="hover:text-red transition-all ease-in 3ms">
							Movies
						</li>
						<li className="hover:text-red transition-all ease-in 3ms">
							Tv series
						</li>
						<li className="hover:text-red transition-all ease-in 3ms">
							New & Popular
						</li>
						<li className="hover:text-red transition-all ease-in 3ms">
							My list
						</li>
					</ul>
				</div>

				<div>
					<img
						src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
						alt=""
						height={40}
						width={40}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
