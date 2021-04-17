import React from 'react'

import { ScreenType, ScreenWidth } from './types.d'

declare interface GlobalStates {
	drawerOpen: boolean
	toggleDrawerOpen: () => void
	templateWidth: ScreenWidth
	changeTemplateWidth: (screenType: ScreenType) => void
}

// @ts-ignore
const GlobalContext = React.createContext<GlobalStates>()

export const GlobalProvider: React.FC = (props) => {
	const [drawerOpen, setDrawerOpen] = React.useState(false)
	const toggleDrawerOpen = () => setDrawerOpen(!drawerOpen)

	const [templateWidth, setTemplateWidth] = React.useState(ScreenWidth.Phone)
	const changeTemplateWidth = (screenType: ScreenType) => {
		switch (screenType) {
			case ScreenType.Phone:
				setTemplateWidth(ScreenWidth.Phone)
				break
			case ScreenType.Laptop:
				setTemplateWidth(ScreenWidth.Laptop)
				break
			case ScreenType.Desktop:
				setTemplateWidth(ScreenWidth.Desktop)
				break
			default:
				break
		}
	}

	const value = {
		drawerOpen,
		toggleDrawerOpen,
		templateWidth,
		changeTemplateWidth
	}

	return (
		<GlobalContext.Provider value={value}>
			{props.children}
		</GlobalContext.Provider>
	)
}

const useGlobalStates = () => {
	const context = React.useContext(GlobalContext)
	if (!context) {
		throw new Error('useGlobalContext must be used within a GlobalProvider')
	}
	return context
}

export default useGlobalStates
