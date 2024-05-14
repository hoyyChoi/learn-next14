import {Suspense} from 'react';
import MovieInfo from '../../../components/movie-info';
import MovieVideo from '../../../components/movie-video';

export default function Movies({params: {id}}: {params: {id: string}}) {
	return (
		<h1>
			<Suspense fallback={<h1>loading</h1>}>
				<MovieInfo id={id} />
			</Suspense>
			<Suspense fallback={<h1>loading video</h1>}>
				<MovieVideo id={id} />
			</Suspense>
		</h1>
	);
}
