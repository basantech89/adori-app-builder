import { Box, makeStyles, useTheme } from '@material-ui/core'
import {
	PaletteColorOptions,
	PaletteOptions
} from '@material-ui/core/styles/createPalette'
import React from 'react'
import { RgbaStringColorPicker } from 'react-colorful'

import { ITheme } from '../../themes/types'
import useClickOutside from './useClickOutside'

const useStyles = makeStyles((theme: ITheme) => ({
	colorBox: () => ({
		minHeight: 40,
		marginTop: theme.spacing(2),
		width: 200,
		border: 'none',
		borderRadius: 5,
		backgroundColor: '#000',
		color: 'transparent'
	}),
	colorText: {
		paddingTop: theme.spacing(2)
	},
	swatch: ({ color }: { color: string }) => ({
		width: 28,
		height: 28,
		outline: 'none',
		borderRadius: 8,
		border: '3px solid #fff',
		boxShadow:
			'0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
		backgroundColor: color,
		cursor: 'pointer'
	}),
	popover: {
		position: 'absolute',
		top: 'calc(100% + 2px)',
		left: 0,
		zIndex: 1,
		background: 'white'
	}
}))

declare type UseColorPicker = {
	id: string
}

const useColorPicker = ({ id }: UseColorPicker) => {
	const theme = useTheme()
	const paletteOption = id.split('-')[1] as keyof PaletteOptions
	const paletteColorOption = id.split('-')[0] as keyof PaletteColorOptions
	const defaultColor =
		theme.palette[paletteOption][paletteColorOption] || 'rgba(255, 255, 255, 1)'

	const [color, setColor] = React.useState<string>(defaultColor)

	const popover: any = React.useRef(null)

	const [pickerOpened, setPickerOpened] = React.useState(false)
	const openPicker = () => setPickerOpened(true)
	const closePicker = React.useCallback(() => setPickerOpened(false), [])
	useClickOutside(popover, closePicker)

	const ColorPicker = () => {
		const classes = useStyles({ color })
		return (
			<Box position='relative'>
				<button className={classes.swatch} onClick={openPicker} />
				{pickerOpened && (
					<div className={classes.popover} ref={popover}>
						<RgbaStringColorPicker color={color} onChange={setColor} />
					</div>
				)}
			</Box>
		)
	}

	return { color, setColor, ColorPicker }
}

export default useColorPicker
