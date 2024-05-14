'use client';
import Link from 'next/link';
import styles from './movie.module.css';
import {useRouter} from 'next/navigation';
interface MovieProps {
	title: string;
	id: string;
	poster_path: string;
}
export default function Movie({title, id, poster_path}: MovieProps) {
	const router = useRouter();
	return (
		<div className={styles.movie}>
			<img
				src={poster_path}
				alt="이미지대체ㄷ"
				onClick={() => router.push(`/movies/${id}`)}
			/>
			<Link href={`/movies/${id}`}>{title}</Link>
		</div>
	);
}
