import { createStore, createEvent, createStoreObject, sample } from 'effector'
import { selectingFunc } from '../utils/selectingFunc'
import { generateRandomNumbers } from '../utils/generateRandomNumbers'
import { checkResultFunc } from '../utils/checkResultFunc'
import { fetchFunc } from '../utils/fetchFunc'

const initialFirst = Array.from({ length: 19 }).map((_, i) => ({
	name: i + 1,
	selected: false,
}))
const initialSecond = Array.from({ length: 2 }).map((_, i) => ({
	name: i + 1,
	selected: false,
}))

export const changeOnFetch = createEvent()
export const $onFetch = createStore(false)
$onFetch.on(changeOnFetch, state => !state)

export const newWinNumbers = createEvent()
export const $winNumbers = createStore(generateRandomNumbers())
$winNumbers.on(newWinNumbers, _ => generateRandomNumbers()).watch(console.log)

export const selectFirstArea = createEvent()
export const selectSecondArea = createEvent()

export const $firstArea = createStore(initialFirst)
$firstArea
	.on(selectFirstArea, selectingFunc(8))
	.on(newWinNumbers, _ => initialFirst)

export const $secondArea = createStore(initialSecond)
$secondArea
	.on(selectSecondArea, selectingFunc(1))
	.on(newWinNumbers, _ => initialSecond)

export const checkResult = createEvent()
export const changeResult = createEvent()
export const $result = createStore('start')
export const cheackAsyncResult = createEvent()

const $object = createStoreObject({
	$firstArea,
	$secondArea,
	$winNumbers,
})

const resultSample = sample($object, checkResult)
resultSample.watch(state => {
	changeResult(checkResultFunc(state))
})
const resultAsyncSample = sample($object, cheackAsyncResult)
resultAsyncSample.watch(async state => {
	const isWon = checkResultFunc(state)
	const data = JSON.stringify({
		selectedNumber: {
			firstField: state.$firstArea.map(x => x.name),
			secondField: state.$secondArea.map(x => x.name),
		},
		isTicketWon: isWon === 'win' ? true : false,
	})
	const result = await fetchFunc(data, isWon)
	changeResult(result)
})

$result.on(changeResult, (_, result) => result)
