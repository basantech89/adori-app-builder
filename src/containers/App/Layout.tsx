import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'

import Header from '../../components/Header'
import light from '../../themes/light'
import { AdoriThemeProvider } from '../Home/AdoriTemplateThemeProvider'
import CustomizationDrawer from '../Home/CustomizationDrawer'
import Routes from './Routes'

const Layout: React.FC = () => {
	// const [isLightTheme, setThemeMode] = useLocalStorageState(
	// 	'isLightTheme',
	// 	true
	// )

	// const theme = themes.light
	// const theme = isLightTheme ? themes.light : themes.dark

	// const toggleThemeMode = () => {
	// 	setThemeMode(!isLightTheme)
	// }

	return (
		<ThemeProvider theme={light}>
			<AdoriThemeProvider>
				<div style={{ display: 'flex' }}>
					<Header />
					<CustomizationDrawer />
					<Routes />
				</div>
			</AdoriThemeProvider>
		</ThemeProvider>
	)
}

export default Layout
