import { Color } from '@material-ui/core'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import {
	Palette,
	PaletteColorOptions,
	PaletteOptions,
	SimplePaletteColorOptions
} from '@material-ui/core/styles/createPalette'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { Overrides } from '@material-ui/core/styles/overrides'

export enum ScreenWidth {
	Phone = 375,
	Laptop = 1024,
	Desktop = 1920
}

export enum ScreenType {
	Phone = 'phone',
	Laptop = 'laptop',
	Desktop = 'desktop'
}

export interface AdoriThemeOptions extends ThemeOptions {
	overrides: Overrides
	palette: PaletteOptions
	typography: TypographyOptions | ((palette: Palette) => TypographyOptions)
}

export type AdoriPalette = {
	primary: SimplePaletteColorOptions | Partial<Color> | undefined
	secondary: SimplePaletteColorOptions | Partial<Color> | undefined
}

export declare type AdoriColor = {
	paletteOption: keyof AdoriPalette
	paletteColorOption: 'main' | 'contrastText'
	value: string
}

export declare type AdoriThemeAction =
	| {
			type: 'typography'
			payload: Partial<TypographyOptions>
	  }
	| { type: 'colors'; payload: AdoriPalette }
	| { type: 'color'; payload: AdoriColor }
	| { type: 'apply'; payload: AdoriThemeOptions }
