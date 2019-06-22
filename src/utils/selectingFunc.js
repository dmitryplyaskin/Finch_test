export const selectingFunc = max => (state, selected) => {
	if (state.filter(x => x.selected).length < max) {
		const select = state.find(x => x.name === selected)
		if (!select.selected) {
			return state.map(x => {
				if (x.name === selected) {
					return { ...x, selected: true }
				}
				return x
			})
		}
	}
	return state
}
