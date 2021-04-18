import { Drawer, List, makeStyles, Toolbar } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

import useGlobalStates from '../../../GlobalStates'
import { ITheme } from '../../../themes/types'
import Colors from './Colors'
import Fonts from './Fonts'

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
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1
		}
	}
}))

const CustomizationDrawer = () => {
	const classes = useStyles()
	const { drawerOpen } = useGlobalStates()

	return (
		<Drawer
			variant='permanent'
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: drawerOpen,
				[classes.drawerClose]: !drawerOpen
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: drawerOpen,
					[classes.drawerClose]: !drawerOpen
				})
			}}
			// onMouseOverCapture={toggleDrawerOpen}
			// onMouseOutCapture={toggleDrawerOpen}
		>
			<Toolbar />
			<List>
				<Colors />
				<Fonts />
			</List>
		</Drawer>
	)
}

export default CustomizationDrawer
