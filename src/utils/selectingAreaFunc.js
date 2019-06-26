export const selectingAreaFunc = max => (state, selected) => {
	if (state.length < max) {
		if (!state.includes(selected)) {
			const newState = [...state, selected]
			return newState
		}
	}
	return state
}
