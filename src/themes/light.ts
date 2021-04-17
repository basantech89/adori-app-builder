import { createMuiTheme } from '@material-ui/core'

import colors from './colors'
import { IThemeOptions } from './types'

const extended = {
	Header: {
		toggler: {
			background: `linear-gradient(to top, ${colors.white.medium} 0%, ${colors.white.light} 100%)`,
			border: `1px solid ${colors.blue.light}`
		}
	}
}

const theme = createMuiTheme({
	name: 'light',
	palette: {
		type: 'light',
		common: colors.common,
		primary: {
			dark: '#09c685',
			main: '#33CC99',
			light: '#5fdbb1',
			contrastText: colors.common.white
		},
		secondary: {
			dark: 'rgba(33,33,33,0.72)',
			main: '#2B2B2B',
			light: '#808080'
		}
	},
	typography: {
		fontFamily: [
			'Poppins',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(',')
	},
	overrides: {
		MuiButton: {
			root: {
				textTransform: 'none'
			}
		}
	},
	cfg: extended
} as IThemeOptions)

export default theme
