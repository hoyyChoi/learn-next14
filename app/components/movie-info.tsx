import {URL} from '../(home)/page';

async function getMovies(id: string) {
	const response = await fetch(`${URL}/${id}`);
	return response.json();
}

export default async function MovieInfo({id}: {id: string}) {
	const movie = await getMovies(id);
	return <h6>{JSON.stringify(movie)}</h6>;
}
