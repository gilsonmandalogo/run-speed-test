import React from 'react';
import { debounce } from 'utils';

interface PersistenceContextType {
	code: string;
	setCode: (value: string) => void;
}

const PersistenceContext = React.createContext<PersistenceContextType | null>(null);

interface PersistenceProviderProps {
	children: React.ReactNode;
}

export function PersistenceProvider({ children }: PersistenceProviderProps) {
	const [code, setCode] = React.useState(localStorage.getItem(persistenceItems.code.key) || persistenceItems.code.defaultValue);

	React.useEffect(() => {
		debounceSave(persistenceItems.code.key, code);
	}, [code]);

	return (
		<PersistenceContext.Provider
			value={{
				code,
				setCode,
			}}
		>
			{children}
		</PersistenceContext.Provider>
	);
}

export function usePersistenceContext() {
	return React.useContext(PersistenceContext)!;
}

const debounceSave = debounce((key: string, value: string) => localStorage.setItem(key, value), 1000);

const persistenceItems = {
	code: {
		key: 'code',
		defaultValue: '// Write your code here',
	},
};
