import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from '../../components/ErrorFallback'
import { GlobalProvider } from '../../GlobalStates'
import Layout from './Layout'

const App: React.FC = () => {
	return (
		<GlobalProvider>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Layout />
			</ErrorBoundary>
		</GlobalProvider>
	)
}

export default App
