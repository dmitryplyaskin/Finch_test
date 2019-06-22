const getArray = arr => arr.filter(x => x.selected).map(x => x.name)

export const checkResultFunc = ({
	$firstArea,
	$secondArea,
	$winNumbers: win,
}) => {
	const first = getArray($firstArea)
	const second = getArray($secondArea)

	const wins = { firstField: 0, secondField: 0 }
	for (let i = 0; i < win.firstField.length; i++) {
		if (first.includes(win.firstField[i])) {
			wins.firstField = wins.firstField + 1
		}
	}
	for (let i = 0; i < win.secondField; i++) {
		if (second.includes(win.secondField[i])) {
			wins.secondField = wins.secondField + 1
		}
	}
	if (wins.firstField >= 4) return 'win'
	if (wins.firstField === 3 && wins.secondField === 1) return 'win'
	return 'fail'
}
