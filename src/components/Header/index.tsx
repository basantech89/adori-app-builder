import { AppBar, Box, Fab, IconButton, Toolbar } from '@material-ui/core'
import { Clear, RotateLeft } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import SaveAltIcon from '@material-ui/icons/SaveAlt'
import { Link } from '@reach/router'
import clsx from 'clsx'
import * as React from 'react'

import useAdoriTemplateTheme from '../../containers/Home/AdoriTemplateThemeProvider'
import useGlobalStates from '../../GlobalStates'
import useToggleButtonGroup from '../../utils/hooks/useToggleButtonGroup'
import { useAppHeaderStyles } from './style'

const AppHeader: React.FC = () => {
	const classes = useAppHeaderStyles()
	const { toggleDrawerOpen, changeTemplateWidth } = useGlobalStates()
	const { applyChanges, cancelChanges, resetChanges } = useAdoriTemplateTheme()
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
						className={clsx(classes.menuButton)}
					>
						<MenuIcon />
					</IconButton>
					<Fab
						variant='extended'
						aria-label='save customizations'
						color='primary'
						className={classes.saveButton}
						onClick={applyChanges}
					>
						<SaveAltIcon />
						Save
					</Fab>
					<Fab
						variant='extended'
						aria-label='cancel customizations'
						className={classes.cancelButton}
						onClick={cancelChanges}
					>
						<Clear fontSize='small' />
						Cancel
					</Fab>
				</div>
				<AdoriToggleButtonGroup />
				<Box display='flex' alignItems='center'>
					<Fab
						variant='extended'
						aria-label='reset customizations'
						className={classes.cancelButton}
						onClick={resetChanges}
					>
						<RotateLeft />
						Reset
					</Fab>
					<Link to='/' className={classes.title}>
						Adori Apps Builder
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default AppHeader
