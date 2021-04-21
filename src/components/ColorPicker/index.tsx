import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import { RgbaStringColorPicker } from 'react-colorful'
import { useDebouncyEffect } from 'use-debouncy'

import { ITheme } from '../../themes/types'
import useClickOutside from '../../utils/hooks/useClickOutside'

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
		width: 24,
		height: 24,
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

declare interface ColorPickerProps {
	defaultColor: string
	handleChangeColor: (color: string) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({
	defaultColor,
	handleChangeColor
}) => {
	const [color, setColor] = React.useState<string>(
		defaultColor || 'rgba(255, 255, 255, 1)'
	)
	const classes = useStyles({ color })

	const popover: any = React.useRef(null)
	const [pickerOpened, setPickerOpened] = React.useState(false)
	const openPicker = () => setPickerOpened(true)
	const closePicker = () => setPickerOpened(false)

	useClickOutside(popover, closePicker)

	useDebouncyEffect(() => handleChangeColor(color), 200, [color])

	return (
		<Box position='relative' mr={4}>
			<button className={classes.swatch} onClick={openPicker} />
			{pickerOpened && (
				<div className={classes.popover} ref={popover}>
					<RgbaStringColorPicker color={color} onChange={setColor} />
				</div>
			)}
		</Box>
	)
}

export default ColorPicker
