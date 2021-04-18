import {
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles
} from '@material-ui/core'
import {
	ColorLensTwoTone,
	ExpandLess,
	ExpandMore,
	InvertColorsTwoTone,
	OpacityTwoTone
} from '@material-ui/icons'
import clsx from 'clsx'
import React from 'react'

import useGlobalStates from '../../../../GlobalStates'
import { ITheme } from '../../../../themes/types'
import {
	Customizations,
	CustomizationsAction,
	CustomizePaletteOption
} from '../types.d'
import ColorItem from './ColorItem'

const customizationsReducer = (
	state: Customizations,
	action: CustomizationsAction
) => {
	switch (action.type) {
		case 'colors': {
			return {
				...state,
				colors: {
					...state.colors,
					[action.payload]: !state.colors[action.payload]
				}
			}
		}
		case 'font':
			return { ...state, font: !state.font }
		default:
			return state
	}
}

const initialCustomizations: Customizations = {
	colors: {
		colors: true,
		primary: true,
		secondary: false,
		mainPrimary: false,
		mainSecondary: false,
		contrastTextPrimary: false,
		contrastTextSecondary: false
	},
	font: false
}

const useStyles = makeStyles((theme: ITheme) => ({
	nested: {
		'& .MuiFormGroup-root': {
			flexDirection: 'row',
			paddingBottom: theme.spacing(4)
		},
		'& .react-colorful': {
			cursor: 'pointer',
			position: 'fixed',
			border: '15px solid white',
			boxSizing: 'content-box',
			borderRadius: 18,
			boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
		},
		'& .MuiListItemText-root': {
			flex: '0 1 50px'
		}
	},
	itemOpened: {
		paddingLeft: 32,
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

const Colors = () => {
	const classes = useStyles()
	const [customizations, dispatchCustomizations] = React.useReducer(
		customizationsReducer,
		initialCustomizations
	)

	const toggleDropdown = React.useCallback(
		(payload: keyof CustomizePaletteOption) => () =>
			dispatchCustomizations({ type: 'colors', payload }),
		[]
	)

	const { drawerOpen } = useGlobalStates()

	return (
		<>
			<ListItem button onClick={toggleDropdown('colors')}>
				<ListItemIcon>
					<ColorLensTwoTone color='primary' />
				</ListItemIcon>
				<ListItemText primary='Colors' />
				{customizations.colors.colors ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={customizations.colors.colors} timeout='auto' unmountOnExit>
				<List>
					<ListItem
						button
						className={clsx({
							[classes.itemOpened]: drawerOpen,
							[classes.itemClosed]: !drawerOpen
						})}
						onClick={toggleDropdown('primary')}
					>
						<ListItemIcon>
							<OpacityTwoTone color='primary' />
						</ListItemIcon>
						<ListItemText primary='Primary' />
						{customizations.colors.primary ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse
						in={customizations.colors.primary}
						timeout='auto'
						unmountOnExit
					>
						<List component='div' disablePadding>
							<ColorItem
								className={classes.nested}
								handleClick={toggleDropdown('mainPrimary')}
								itemText='Main'
								id='main-primary'
							/>
							<ColorItem
								className={classes.nested}
								handleClick={toggleDropdown('contrastTextPrimary')}
								itemText='Text'
								id='contrastText-primary'
							/>
						</List>
					</Collapse>
					<ListItem
						button
						className={clsx({
							[classes.itemOpened]: drawerOpen,
							[classes.itemClosed]: !drawerOpen
						})}
						onClick={toggleDropdown('secondary')}
					>
						<ListItemIcon>
							<InvertColorsTwoTone color='primary' />
						</ListItemIcon>
						<ListItemText primary='Secondary' />
						{customizations.colors.secondary ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse
						in={customizations.colors.secondary}
						timeout='auto'
						unmountOnExit
					>
						<List component='div' disablePadding>
							<ColorItem
								className={classes.nested}
								handleClick={toggleDropdown('mainSecondary')}
								itemText='Main'
								id='main-secondary'
							/>
							<ColorItem
								className={classes.nested}
								handleClick={toggleDropdown('contrastTextSecondary')}
								itemText='Text'
								id='contrastText-secondary'
							/>
						</List>
					</Collapse>
				</List>
			</Collapse>
		</>
	)
}

export default Colors
