import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Editor from "@monaco-editor/react";
import { ActionButton } from "components/ActionButton";
import { Results } from "components/Results";
import { usePersistenceContext } from 'contexts/Persistence';
import React from 'react';
import codeRunner from 'workers/codeRunner.worker.js';
import styles from './FrontPage.module.scss';

const editorOptions = {
	minimap: {
		enabled: false,
	},
};

const FrontPage = () => {
	const [results, setResults] = React.useState<string[]>([]);
	const [isRunning, setRunning] = React.useState(false);
	const containerRef = React.useRef<HTMLDivElement>(null);
	const { code, setCode } = usePersistenceContext();

	const handleRun = React.useCallback(() => {
		setRunning(true);
		const worker = new codeRunner();
		worker.postMessage({ code });
		worker.addEventListener('message', e => {
			const { startTime, endTime, result } = e.data;
			const diffTime = endTime - startTime;
			const useSeconds = diffTime >= 1;
			const formatedTime = useSeconds ? diffTime / 1000 : diffTime;
			const roundedTime = Number(formatedTime).toFixed(3);
			const date = new Date();
			const newResult = `[${date.toLocaleDateString()} — ${date.toLocaleTimeString()}] Execution time: ${roundedTime}${useSeconds ? 's' : 'ms'} — Result: ${result}`;
			setResults([...results, newResult]);
			setRunning(false);
		});
	}, [code, results]);

	const handleKeydown = React.useCallback((event: KeyboardEvent) => {
		if (event.code === 'F5') {
			handleRun();
		}
	}, [handleRun]);

	React.useEffect(() => {
		const container = containerRef.current;

		if (!container) {
			return;
		}

		container.addEventListener('keydown', handleKeydown, { passive: true });
		return () => container.removeEventListener('keydown', handleKeydown);
	}, [containerRef, handleKeydown]);

	const handleChange = React.useCallback((value?: string) => {
		setCode(value || '');
	}, [setCode]);

	return (
		<div
			className={styles.container}
			ref={containerRef}
			tabIndex={0}
		>
			<Editor
				height="100vh"
				width="50vw"
				defaultLanguage="javascript"
				value={code}
				onChange={handleChange}
				theme="vs-dark"
				options={editorOptions}
			/>
			<div>
				<ActionButton
					icon={faPlay}
					tooltip="Execute (F5)"
					action={handleRun}
					disabled={isRunning}
				/>
			</div>
			<Results results={results}/>
		</div>
	);
};

export default FrontPage;
