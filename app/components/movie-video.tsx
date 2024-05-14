import {URL} from '../(home)/page';

async function getVideos(id: string) {
	await new Promise(resolve => setTimeout(resolve, 3000));
	const response = await fetch(`${URL}/${id}/videos`);
	return response.json();
}

export default async function MovieVideo({id}: {id: string}) {
	const video = await getVideos(id);
	return <h6>{JSON.stringify(video)}</h6>;
}
