import { ListItem, ListItemText, makeStyles } from '@material-ui/core'
import { PaletteColorOptions } from '@material-ui/core/styles/createPalette'
import clsx from 'clsx'
import React from 'react'

import ColorPicker from '../../../../components/ColorPicker'
import useGlobalStates from '../../../../GlobalStates'
import { ITheme } from '../../../../themes/types'
import { AdoriPalette } from '../../../../types'
import useAdoriTemplateTheme from '../../AdoriTemplateThemeProvider'

declare interface ColorItemProps {
	className: string
	handleClick: (event: any) => void
	itemText: string
	defaultColor?: string
	paletteOption: string
	paletteColorOption: string
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

const ColorItem: React.FC<ColorItemProps> = React.memo((props) => {
	const { templateTheme } = useAdoriTemplateTheme()

	const paletteOption = props.paletteOption as keyof AdoriPalette
	const paletteColorOption = props.paletteColorOption as keyof PaletteColorOptions
	const defaultColor =
		templateTheme.palette[paletteOption][paletteColorOption] ||
		'rgba(255, 255, 255, 1)'

	const handleChangeColor = (color: string) =>
		changeColorTemporary({ paletteOption, paletteColorOption, value: color })

	const classes = useStyles({ color: defaultColor })

	const { changeColorTemporary } = useAdoriTemplateTheme()

	const { drawerOpen } = useGlobalStates()

	return (
		<ListItem
			className={clsx(props.className, {
				[classes.itemOpened]: drawerOpen,
				[classes.itemClosed]: !drawerOpen
			})}
			datai-id={`${paletteOption}-${paletteColorOption}`}
			onClick={props.handleClick}
		>
			<ColorPicker
				defaultColor={defaultColor}
				handleChangeColor={handleChangeColor}
			/>
			<ListItemText primary={props.itemText} />
		</ListItem>
	)
})

export default ColorItem
