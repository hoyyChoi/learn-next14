import styles from './movie-video.module.css';
async function getVideos(id: string) {
	const response = await fetch(`${URL}/${id}/videos`);
	return response.json();
}

export default async function MovieVideo({id}: {id: string}) {
	const video = await getVideos(id);
	return (
		<div className={styles.container}>
			{video.slice(0, 9).map(video => (
				<iframe
					src={`https://youtube.com/embed/${video.key}`}
					title={video.name}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			))}
		</div>
	);
}
