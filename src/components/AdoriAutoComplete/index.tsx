import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import React from 'react'

export interface OptionType {
	label: string
	value: string | number
}

declare interface AdoriAutoCompleteProps {
	options: OptionType[]
	handleValueChange: (
		value: string | number | OptionType | null | undefined
	) => void
}

const AdoriAutoComplete: React.FC<AdoriAutoCompleteProps> = (props) => {
	const [value, setValue] = React.useState<OptionType | null | undefined>(
		props.options[0]
	)
	const [inputValue, setInputValue] = React.useState('')

	return (
		<Autocomplete
			value={value}
			onChange={(event: any, newValue: OptionType | null | string) => {
				setValue(newValue as OptionType)
				props.handleValueChange((newValue as OptionType)?.value)
			}}
			freeSolo
			inputValue={inputValue}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue)
				props.handleValueChange(newInputValue)
			}}
			options={props.options}
			getOptionLabel={(option) => option.label}
			style={{ width: 90 }}
			renderInput={(params) => <TextField {...params} />}
		/>
	)
}

export default AdoriAutoComplete
