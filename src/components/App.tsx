import { Loading } from 'components/Loading';
import { PersistenceProvider } from 'contexts/Persistence';
import React from 'react';

export const App = () => (
	<React.Suspense fallback={<Loading/>}>
		<PersistenceProvider>
			<FrontPage/>
		</PersistenceProvider>
	</React.Suspense>
);

const FrontPage = React.lazy(() => import('pages/FrontPage'));
