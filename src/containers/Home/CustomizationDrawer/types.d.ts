export type CustomizePaletteOption = {
	colors: boolean
	primary: boolean
	secondary: boolean
	mainPrimary: boolean
	mainSecondary: boolean
	contrastTextPrimary: boolean
	contrastTextSecondary: boolean
}

export type Customizations = {
	colors: CustomizePaletteOption
	font: boolean
}

export type CustomizationsAction =
	| { type: 'colors'; payload: keyof CustomizePaletteOption }
	| { type: 'font' }
