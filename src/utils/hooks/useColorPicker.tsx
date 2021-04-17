import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { RgbaStringColorPicker } from 'react-colorful'

import { ITheme } from '../../themes/types'

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
	}
}))

declare type UseColorPicker = {
	defaultColor: string
}

const useColorPicker = ({ defaultColor }: UseColorPicker) => {
	const [color, setColor] = React.useState(defaultColor)

	// const changeColor = (color: string) => {
	// 	setColor(color)
	// 	handleColorChange(color)
	// }

	const ColorPicker = () => {
		const classes = useStyles()
		return (
			<>
				<RgbaStringColorPicker color={color} onChange={setColor} />
				<div className={classes.colorBox} />
				<Typography className={classes.colorText}> {color} </Typography>
			</>
		)
	}

	return { color, setColor, ColorPicker }
}

export default useColorPicker
