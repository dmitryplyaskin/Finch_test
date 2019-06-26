import { createStore, createEvent, sample, createStoreObject } from 'effector'
import { $firstWinArea, $secondWinArea } from './winAreas'
import { $firstAreaSelect, $secondAreaSelect } from './selectingAreas'
import { checkResultFunc } from '../utils/checkResultFunc'
import { fetchFunc } from '../utils/fetchFunc'

const checkResult = createEvent()
const changeResult = createEvent()
const $result = createStore('start')
const cheackAsyncResult = createEvent()

const $object = createStoreObject({
	$firstWinArea,
	$secondWinArea,
	$firstAreaSelect,
	$secondAreaSelect,
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
			firstField: state.$firstArea,
			secondField: state.$secondArea,
		},
		isTicketWon: isWon === 'win' ? true : false,
	})
	const result = await fetchFunc(data, isWon)
	changeResult(result)
})

$result.on(changeResult, (_, result) => result)

export { checkResult, changeResult, $result, cheackAsyncResult }
