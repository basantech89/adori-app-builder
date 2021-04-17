declare interface BaseCustomization {
	opened: boolean
}

export type BackgroundType = 'solid' | 'gradient'

export declare interface Background extends BaseCustomization {
	type: BackgroundType
	colors: Array<string>
}
