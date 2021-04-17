import { AppBar, Button, Fab, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SaveAltIcon from '@material-ui/icons/SaveAlt'
import { Link } from '@reach/router'
import clsx from 'clsx'
import * as React from 'react'

import DarkThemeIcon from '../../assets/icons/darkThemeIcon'
import LightThemeIcon from '../../assets/icons/lightThemeIcon'
import useGlobalStates from '../../GlobalStates'
import useToggleButtonGroup from '../../utils/hooks/useToggleButtonGroup'
import { useAppHeaderStyles } from './style'

// declare interface IAppHeaderProps {
// 	onToggleThemeMode: () => void
// }

const AppHeader = () => {
	const classes = useAppHeaderStyles()
	const {
		drawerOpen,
		toggleDrawerOpen,
		changeTemplateWidth
	} = useGlobalStates()
	const { AdoriToggleButtonGroup } = useToggleButtonGroup(changeTemplateWidth)

	return (
		<AppBar position={'fixed'} className={classes.appbar}>
			<Toolbar className={classes.toolbar}>
				<div className={classes.titleContainer}>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={toggleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, {
							[classes.hide]: drawerOpen
						})}
					>
						<MenuIcon />
					</IconButton>
					<Fab
						variant='extended'
						aria-label='save customizations'
						color='primary'
						className={classes.saveButton}
					>
						<SaveAltIcon />
						Save
					</Fab>
				</div>
				<AdoriToggleButtonGroup />
				<Link to='/' className={classes.title}>
					Adori Apps Builder
				</Link>
				{/*<Button*/}
				{/*	className={classes.themeToggleButton}*/}
				{/*	onClick={props.onToggleThemeMode}*/}
				{/*>*/}
				{/*	<DarkThemeIcon />*/}
				{/*	<LightThemeIcon />*/}
				{/*</Button>*/}
			</Toolbar>
		</AppBar>
	)
}

export default AppHeader
