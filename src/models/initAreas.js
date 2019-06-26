import { createStore } from 'effector'

const initialFirst = Array.from({ length: 19 }).map((_, i) => i + 1)
const initialSecond = Array.from({ length: 2 }).map((_, i) => i + 1)

const $firstArea = createStore(initialFirst)
const $secondArea = createStore(initialSecond)

export { $firstArea, $secondArea }
