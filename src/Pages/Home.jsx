import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import Request from '../Request/Request';

const Home = () => {
	return (
		<div className=" font-main relative h-screen lg:h-[140vh]  ">
			<main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 overflow-x-hidden bg-gradient-to-b from-black/70 via-black to-black">
				<Banner />

				<Row title="Trending" fetch={Request.fetchTrending} />
				<Row title="Romance" fetch={Request.fetchRomanceMovies} />
				<Row title="Horror" fetch={Request.fetchHorrorMovies} />
				<Row title="Comedy" fetch={Request.fetchComedyMovies} />
				<Row title="Action" fetch={Request.fetchActionMovies} />
				<Row title="Documentaries" fetch={Request.fetchDocumentaries} />
			</main>
		</div>
	);
};

export default Home;
