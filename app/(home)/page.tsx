import Link from 'next/link';

export const metadata = {
	title: 'home.js',
	description: 'Generatewfwefewfed by Next.js',
};

export const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';
const getMovies = async () => {
	console.log('fetching');
	await new Promise(resolve => setTimeout(resolve, 1000));
	const response = await fetch(URL);
	const json = response.json();
	return json;
};

export default async function Tomato() {
	const movies = await getMovies();
	return (
		<h1>
			{movies.map(movie => (
				<li key={movie.id}>
					<Link href={`/movies/${movie.id}`}>{movie.title}</Link>
				</li>
			))}
		</h1>
	);
}
