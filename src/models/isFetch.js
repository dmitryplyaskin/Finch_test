import { createStore, createEvent } from 'effector'

const changeIsFetch = createEvent()
const $isFetch = createStore(false)
$isFetch.on(changeIsFetch, state => !state)

export { changeIsFetch, $isFetch }
