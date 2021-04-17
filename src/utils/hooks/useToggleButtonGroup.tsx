import LaptopIcon from '@material-ui/icons/Laptop'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import TvIcon from '@material-ui/icons/Tv'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import React from 'react'

import { ScreenType } from '../../types.d'

const useToggleGroup = (
	handleScreenTypeChange: (newScreenType: ScreenType) => void
) => {
	const [screenType, setScreenType] = React.useState<ScreenType>(
		ScreenType.Phone
	)

	const AdoriToggleButtonGroup = () => {
		const handleAlignment = (
			event: React.MouseEvent<HTMLElement>,
			newScreenType: ScreenType | null
		) => {
			if (newScreenType) {
				setScreenType(newScreenType)
				handleScreenTypeChange(newScreenType)
			}
		}

		return (
			<ToggleButtonGroup
				value={screenType}
				exclusive
				onChange={handleAlignment}
				aria-label='screen type'
			>
				<ToggleButton value='laptop' aria-label='left aligned'>
					<LaptopIcon />
				</ToggleButton>
				<ToggleButton value='desktop' aria-label='centered'>
					<TvIcon />
				</ToggleButton>
				<ToggleButton value='phone' aria-label='right aligned'>
					<PhoneAndroidIcon />
				</ToggleButton>
			</ToggleButtonGroup>
		)
	}

	return { screenType, AdoriToggleButtonGroup }
}

export default useToggleGroup
