import {
	createStyles,
	FormControl,
	makeStyles,
	MenuItem,
	Select
} from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import React from 'react'

export interface OptionType {
	label: string
	value: string | number
}

declare interface AdoriSelectProps {
	options: OptionType[]
	handleValueChange: (value: string | number) => void
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 80
		}
	})
)

const AdoriSelect: React.FC<AdoriSelectProps> = (props) => {
	const classes = useStyles()
	const [value, setValue] = React.useState<string | number>(
		props.options[0].value
	)
	const [open, setOpen] = React.useState(false)
	const toggle = () => setOpen(!open)

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setValue(event.target.value as any)
		props.handleValueChange(event.target.value as any)
	}

	return (
		<FormControl className={classes.formControl}>
			<Select
				open={open}
				onClose={toggle}
				onOpen={toggle}
				value={value}
				onChange={handleChange}
			>
				{props.options.map((option: OptionType) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default AdoriSelect
