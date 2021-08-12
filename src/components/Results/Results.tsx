import React from 'react';
import styles from './Results.module.scss';

interface ResultsProps {
	results: string[];
}

export const Results = ({ results }: ResultsProps) => {
	const containerRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		containerRef.current?.scrollTo({
			behavior: 'smooth',
			top: containerRef.current.scrollHeight,
		});
	}, [results]);

	const renderedResults = React.useMemo(() => results.map((result, index) => (
		<div
			key={index}
			className={styles.result}
		>
			<p>{result}</p>
		</div>
	)), [results]);

	return (
		<div
			className={styles.container}
			ref={containerRef}
		>
			{renderedResults}
		</div>
	);
};
