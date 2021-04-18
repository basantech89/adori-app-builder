import {
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles
} from '@material-ui/core'
import {
	ExpandLess,
	ExpandMore,
	FontDownloadTwoTone,
	FormatSizeTwoTone,
	LineWeightTwoTone
} from '@material-ui/icons'
import clsx from 'clsx'
import React from 'react'

import AdoriAutoComplete, {
	OptionType
} from '../../../../components/AdoriAutoComplete'
import AdoriSelect from '../../../../components/AdoriSelect'
import useGlobalStates from '../../../../GlobalStates'
import { ITheme } from '../../../../themes/types'
import useAdoriTemplateTheme from '../../AdoriTemplateThemeProvider'

type FontWeight = {
	label: string
	value: number
}

const weights: FontWeight[] = [
	{
		label: '400',
		value: 400
	},
	{
		label: '500',
		value: 500
	},
	{
		label: '600',
		value: 600
	}
]

const size = [
	{
		label: '14',
		value: 14
	},
	{
		label: '15',
		value: 15
	},
	{
		label: '16',
		value: 16
	}
]

const useStyles = makeStyles((theme: ITheme) => ({
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

const Fonts = () => {
	const classes = useStyles()
	const [dropdownOpened, setDropdownOpened] = React.useState(false)
	const toggleDropdown = () => setDropdownOpened(!dropdownOpened)
	const { changeTypographyTemporary } = useAdoriTemplateTheme()

	const changeFontWeight = (weight: number | string) => {
		changeTypographyTemporary({ fontWeightRegular: weight as number })
	}

	const changeFontSize = (
		size: string | number | OptionType | null | undefined
	) => {
		changeTypographyTemporary({ fontSize: size as number })
	}

	const { drawerOpen } = useGlobalStates()

	return (
		<>
			<ListItem button onClick={toggleDropdown}>
				<ListItemIcon>
					<FontDownloadTwoTone color='primary' />
				</ListItemIcon>
				<ListItemText primary='Font' />
				{dropdownOpened ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={dropdownOpened} timeout='auto' unmountOnExit>
				<List component='div' disablePadding>
					<ListItem
						className={clsx({
							[classes.itemOpened]: drawerOpen,
							[classes.itemClosed]: !drawerOpen
						})}
					>
						<ListItemIcon>
							<FormatSizeTwoTone color='primary' />
						</ListItemIcon>
						<ListItemText primary='Size' />
						<AdoriAutoComplete
							options={size}
							handleValueChange={changeFontSize}
						/>
					</ListItem>
					<ListItem
						className={clsx({
							[classes.itemOpened]: drawerOpen,
							[classes.itemClosed]: !drawerOpen
						})}
					>
						<ListItemIcon>
							<LineWeightTwoTone color='primary' />
						</ListItemIcon>
						<ListItemText primary='Weight' />
						<AdoriSelect
							options={weights}
							handleValueChange={changeFontWeight}
						/>
					</ListItem>
				</List>
			</Collapse>
		</>
	)
}

export default Fonts
