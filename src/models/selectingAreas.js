import { createStore, createEvent } from 'effector'
import { selectingAreaFunc } from '../utils/selectingAreaFunc'
import { generateRandomNumbers } from '../utils/generateRandomNumbers'

const getRandomAreas = createEvent()

const changeFirstAreaSelect = createEvent()
const $firstAreaSelect = createStore([])

$firstAreaSelect
	.on(changeFirstAreaSelect, selectingAreaFunc(8))
	.on(getRandomAreas, _ => generateRandomNumbers(8, 1, 19))

const changeSecondAreaSelect = createEvent()
const $secondAreaSelect = createStore([])

$secondAreaSelect
	.on(changeSecondAreaSelect, selectingAreaFunc(1))
	.on(getRandomAreas, _ => generateRandomNumbers(1, 1, 2))

export {
	changeFirstAreaSelect,
	$firstAreaSelect,
	changeSecondAreaSelect,
	$secondAreaSelect,
	getRandomAreas,
}
