import { createMuiTheme } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import React from 'react'

import { lightThemeOptions } from '../../themes/light'
import { AdoriColor, AdoriThemeAction, AdoriThemeOptions } from '../../types'
import { useLocalStorageState } from '../../utils/useLocalStorageState'

declare interface AdoriTemplateTheme {
	// changeColors: (payload: AdoriPalette) => void
	changeTypographyTemporary: (payload: Partial<TypographyOptions>) => void
	changeColorTemporary: (payload: AdoriColor) => void
	applyChanges: () => void
	resetChanges: () => void
	cancelChanges: () => void
	templateTheme: Theme
}

// @ts-ignore
const AdoriThemeContext = React.createContext<AdoriTemplateTheme>()

const themeReducer = (
	state: AdoriThemeOptions,
	action: AdoriThemeAction
): AdoriThemeOptions => {
	switch (action.type) {
		case 'colors':
			return {
				...state,
				palette: {
					...state.palette,
					primary: { ...state.palette.primary, ...action.payload.primary },
					secondary: {
						...state.palette.secondary,
						...action.payload.secondary
					}
				}
			}
		case 'color':
			return {
				...state,
				palette: {
					...state.palette,
					[action.payload.paletteOption]: {
						...state.palette[action.payload.paletteOption],
						[action.payload.paletteColorOption]: action.payload.value
					}
				}
			}
		case 'typography': {
			return {
				...state,
				typography: { ...state.typography, ...action.payload }
			}
		}
		case 'apply':
			return { ...state, ...action.payload }
		default:
			return state
	}
}

export const AdoriThemeProvider: React.FC = (props) => {
	const [
		permanentThemeOptions,
		setPermanentThemeOptions
	] = useLocalStorageState('themeOptions', lightThemeOptions)

	const [temporaryThemeOptions, setTemporaryThemeOptions] = React.useReducer(
		themeReducer,
		permanentThemeOptions
	)

	const changeTypographyTemporary = (payload: Partial<TypographyOptions>) =>
		setTemporaryThemeOptions({ type: 'typography', payload })

	const changeColorTemporary = React.useCallback(
		(payload: AdoriColor) =>
			setTemporaryThemeOptions({ type: 'color', payload }),
		[]
	)

	const templateTheme = createMuiTheme(temporaryThemeOptions)

	const applyChanges = () => setPermanentThemeOptions(temporaryThemeOptions)

	const cancelChanges = () =>
		setTemporaryThemeOptions({ type: 'apply', payload: permanentThemeOptions })

	const resetChanges = () => {
		setTemporaryThemeOptions({ type: 'apply', payload: lightThemeOptions })
		setPermanentThemeOptions(lightThemeOptions)
	}

	const value = {
		changeColorTemporary,
		changeTypographyTemporary,
		applyChanges,
		resetChanges,
		cancelChanges,
		templateTheme
	}

	return (
		<AdoriThemeContext.Provider value={value}>
			{props.children}
		</AdoriThemeContext.Provider>
	)
}

const useAdoriTemplateTheme = () => {
	const context = React.useContext(AdoriThemeContext)
	if (!context) {
		throw new Error(
			'useAdoriTemplateTheme must be used within a AdoriThemeProvider'
		)
	}
	return context
}

export default useAdoriTemplateTheme
