import { createStore } from 'effector'
import { generateRandomNumbers } from '../utils/generateRandomNumbers'

const $firstWinArea = createStore(generateRandomNumbers(8, 1, 19))
const $secondWinArea = createStore(generateRandomNumbers(1, 1, 2))

$firstWinArea.watch(console.log)
$secondWinArea.watch(console.log)

export { $firstWinArea, $secondWinArea }
