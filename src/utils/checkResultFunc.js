export const checkResultFunc = ({
	$firstWinArea,
	$secondWinArea,
	$firstAreaSelect,
	$secondAreaSelect,
}) => {
	const wins = { firstField: 0, secondField: 0 }
	for (let i = 0; i < $firstAreaSelect.length; i++) {
		if ($firstWinArea.includes($firstAreaSelect[i])) {
			wins.firstField = wins.firstField + 1
		}
	}
	for (let i = 0; i < $secondAreaSelect.length; i++) {
		if ($secondWinArea.includes($secondAreaSelect[i])) {
			wins.secondField = wins.secondField + 1
		}
	}
	if (wins.firstField >= 4) return 'win'
	if (wins.firstField === 3 && wins.secondField === 1) return 'win'
	return 'fail'
}
