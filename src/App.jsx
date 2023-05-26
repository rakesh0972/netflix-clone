import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './Pages/Detail';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/movie/:id" element={<Detail />} />
				</Routes>
			</BrowserRouter>

			{/* <div className=" font-main relative h-screen lg:h-[140vh]  ">
				<Navbar />
				<main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 overflow-x-hidden bg-gradient-to-b from-black/10 via-black to-black">
					<Banner />

					<Row title="Netflix originals" fetch={Request.fetchTrending} />
					<Row title="Romance" fetch={Request.fetchRomanceMovies} />
					<Row title="Horror" fetch={Request.fetchHorrorMovies} />
					<Row title="Comedy" fetch={Request.fetchComedyMovies} />
					<Row title="Action" fetch={Request.fetchActionMovies} />
				</main>
			</div> */}
		</>
	);
}

export default App;
