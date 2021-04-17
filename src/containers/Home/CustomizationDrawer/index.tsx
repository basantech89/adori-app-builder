import {
	Collapse,
	Drawer,
	FormControlLabel,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Radio,
	RadioGroup,
	Toolbar
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import clsx from 'clsx'
import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../store'
import {
	changeBackgroundColors,
	changeBackgroundType,
	selectBackground,
	toggleBackground
} from '../../../store/state/background'
import { BackgroundType } from '../../../store/state/types'
import { ITheme } from '../../../themes/types'
import useColorPicker from '../../../utils/hooks/useColorPicker'

const drawerWidth = 300

const useStyles = makeStyles((theme: ITheme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap'
	},
	drawerOpen: {
		width: drawerWidth,
		backgroundColor: 'rgba(247,251,252,0.34)',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1
		}
	},
	nested: {
		flexDirection: 'column',
		'& .MuiFormGroup-root': {
			flexDirection: 'row',
			paddingBottom: theme.spacing(4)
		},
		'& .react-colorful': {
			cursor: 'pointer'
		}
	}
}))

const CustomizationDrawer = () => {
	const classes = useStyles()
	const dispatch = useAppDispatch()

	const [bgType, setBgType] = React.useState<BackgroundType>('solid')

	const background = useAppSelector(selectBackground)

	const changeColor = (color: string) => dispatch(changeBackgroundColors(color))
	const { ColorPicker } = useColorPicker({
		defaultColor: 'rgba(255, 255, 255, 1)'
	})

	const dispatchToggleBackground = () => dispatch(toggleBackground())
	const handleBgType = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value as BackgroundType
		setBgType(value)
		dispatch(changeBackgroundType(value))
	}

	return (
		<Drawer
			variant='permanent'
			className={clsx(classes.drawer)}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open
				})
			}}
		>
			<Toolbar />
			<List>
				<ListItem button onClick={dispatchToggleBackground}>
					<ListItemText primary='Background' />
					{background.opened ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={background.opened} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						<ListItem button className={classes.nested}>
							<RadioGroup
								aria-label='background type'
								name='bgType'
								value={bgType}
								onChange={handleBgType}
							>
								<FormControlLabel
									value='solid'
									control={<Radio />}
									label='Solid'
								/>
								<FormControlLabel
									value='gradient'
									control={<Radio />}
									label='Gradient'
								/>
							</RadioGroup>
							<ColorPicker />
						</ListItem>
					</List>
				</Collapse>
			</List>
		</Drawer>
	)
}

export default CustomizationDrawer
