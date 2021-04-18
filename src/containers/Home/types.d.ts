export type AdoriThemeColor = {
	main: string
	contrastText: string
}

export type AdoriThemeColors = {
	primary: AdoriThemeColor
	secondary: AdoriThemeColor
}

export type AdoriThemeColorsAction = {
	type: keyof AdoriThemeColors
	payload: { key: keyof AdoriThemeColor; value: string }
}
