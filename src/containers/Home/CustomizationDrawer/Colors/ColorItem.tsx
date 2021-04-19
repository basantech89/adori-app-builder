import {
	Box,
	ListItem,
	ListItemText,
	makeStyles,
	useTheme
} from '@material-ui/core'
import { PaletteColorOptions } from '@material-ui/core/styles/createPalette'
import clsx from 'clsx'
import React from 'react'
import { RgbaStringColorPicker } from 'react-colorful'

import useGlobalStates from '../../../../GlobalStates'
import { ITheme } from '../../../../themes/types'
import { AdoriPalette } from '../../../../types'
import useClickOutside from '../../../../utils/hooks/useClickOutside'
import useAdoriTemplateTheme from '../../AdoriTemplateThemeProvider'

declare interface ColorItemProps {
	className: string
	handleClick: () => void
	itemText: string
	id: string
	defaultColor?: string
}

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
	},
	itemOpened: {
		paddingLeft: 48,
		transition: theme.transitions.create('padding-left', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	itemClosed: {
		paddingLeft: 16,
		transition: theme.transitions.create('padding-left', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	}
}))

const ColorItem: React.FC<ColorItemProps> = (props) => {
	const { templateTheme } = useAdoriTemplateTheme()
	const paletteOption = props.id.split('-')[1] as keyof AdoriPalette
	const paletteColorOption = props.id.split('-')[0] as keyof PaletteColorOptions
	const defaultColor =
		templateTheme.palette[paletteOption][paletteColorOption] ||
		'rgba(255, 255, 255, 1)'

	const [color, setColor] = React.useState<string>(defaultColor)

	const classes = useStyles({ color: defaultColor })

	const popover: any = React.useRef(null)

	const [pickerOpened, setPickerOpened] = React.useState(false)
	const openPicker = () => setPickerOpened(true)
	const closePicker = React.useCallback(() => setPickerOpened(false), [])
	useClickOutside(popover, closePicker)

	const { changeColorTemporary } = useAdoriTemplateTheme()
	const handleChangeColor = (color: string) => {
		setColor(color)
		changeColorTemporary({ paletteOption, paletteColorOption, value: color })
	}

	const { drawerOpen } = useGlobalStates()

	return (
		<ListItem
			className={clsx(props.className, {
				[classes.itemOpened]: drawerOpen,
				[classes.itemClosed]: !drawerOpen
			})}
			onClick={props.handleClick}
		>
			<Box position='relative' mr={4}>
				<button className={classes.swatch} onClick={openPicker} />
				{pickerOpened && (
					<div className={classes.popover} ref={popover}>
						<RgbaStringColorPicker color={color} onChange={handleChangeColor} />
					</div>
				)}
			</Box>
			<ListItemText primary={props.itemText} />
		</ListItem>
	)
}

export default ColorItem
