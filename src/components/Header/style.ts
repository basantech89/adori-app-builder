import { createStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ITheme } from '../../themes/types'

export const useAppHeaderStyles = makeStyles(
	(theme: ITheme) =>
		createStyles({
			appbar: {
				zIndex: theme.zIndex.drawer + 1
			},
			toolbar: {
				justifyContent: 'space-between'
			},
			titleContainer: {
				display: 'flex',
				alignItems: 'center'
			},
			title: {
				fontSize: 'large',
				fontWeight: 500,
				color: theme.palette.primary.contrastText,
				textDecoration: 'none',
				[theme.breakpoints.up('sm')]: {
					display: 'block'
				}
			},
			themeToggleButton: {
				background: theme.cfg.Header.toggler.background,
				border: theme.cfg.Header.toggler.border,
				borderRadius: 30,
				width: '4%',
				padding: '5px 10px',
				display: 'inline-flex',
				justifyContent: 'space-between',
				overflow: 'hidden',
				'& svg': {
					height: 22,
					width: 22,
					transition: 'all 0.3s linear'
				},
				'& svg:first-child': {
					transform:
						theme.name === 'light' ? 'translateX(100px)' : 'translateX(0px)'
				},
				'& svg:nth-child(2)': {
					transform:
						theme.name === 'light' ? 'translateX(0)' : 'translateX(-100px)'
				}
			},
			menuButton: {
				marginRight: 36
			},
			hide: {
				display: 'none'
			},
			saveButton: {
				textTransform: 'none',
				marginRight: 20,
				minWidth: 95,
				height: 35,
				boxShadow: 'none',
				border: `1px solid ${theme.palette.primary.contrastText}`,
				'& .MuiFab-label': {
					display: 'flex',
					justifyContent: 'space-between'
				}
			}
		}),
	{
		name: 'Header'
	}
)
