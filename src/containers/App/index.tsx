import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'

import ErrorFallback from '../../components/ErrorFallback'
import { GlobalProvider } from '../../GlobalStates'
import store from '../../store'
import Layout from './Layout'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<GlobalProvider>
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<Layout />
				</ErrorBoundary>
			</GlobalProvider>
		</Provider>
	)
}

export default App
