import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../index'
import { Background, BackgroundType } from './types'

const initialState: Background = {
	opened: false,
	type: 'solid',
	colors: []
}

const backgroundSlice = createSlice({
	name: 'background',
	initialState,
	reducers: {
		changeBackgroundType: (state, action: PayloadAction<BackgroundType>) => {
			state.type = action.payload
		},
		toggleBackground: (state) => {
			state.opened = !state.opened
		},
		changeBackgroundColors: (
			state,
			action: PayloadAction<Array<string> | string>
		) => {
			if (action.payload instanceof Array) {
				state.colors = [...state.colors, ...action.payload]
			} else {
				state.colors.push(action.payload)
			}
		}
	}
})

export const {
	changeBackgroundColors,
	toggleBackground,
	changeBackgroundType
} = backgroundSlice.actions
export default backgroundSlice.reducer

export const selectBackground = (state: RootState) => state.background
