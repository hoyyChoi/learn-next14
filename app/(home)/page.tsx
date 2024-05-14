import Movie from '../../components/movie';
import {API_URL} from '../constants';
import styles from './homepage.module.css';
export const metadata = {
	title: 'home.js',
	description: 'Generatewfwefewfed by Next.js',
};

const getMovies = async () => {
	console.log('fetching');
	await new Promise(resolve => setTimeout(resolve, 1000));
	const response = await fetch(API_URL);
	const json = response.json();
	return json;
};

export default async function Tomato() {
	const movies = await getMovies();
	return (
		<div className={styles.container}>
			{movies.map(movie => (
				<Movie
					key={movie.id}
					id={movie.id}
					poster_path={movie.poster_path}
					title={movie.title}
				/>
			))}
		</div>
	);
}
