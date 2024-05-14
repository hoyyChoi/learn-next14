import {Suspense} from 'react';
import MovieInfo, {getMovies} from '../../../components/movie-info';
import MovieVideo from '../../../components/movie-video';

export async function generateMetadata({params: {id}}: {params: {id: string}}) {
	const movie = await getMovies(id);
	return {
		title: movie.title,
	};
}

export default function Movies({params: {id}}: {params: {id: string}}) {
	return (
		<div>
			<Suspense fallback={<h1>loading</h1>}>
				<MovieInfo id={id} />
			</Suspense>
			<Suspense fallback={<h1>loading video</h1>}>
				<MovieVideo id={id} />
			</Suspense>
		</div>
	);
}
