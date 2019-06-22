const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

const checkNumber = (arrayNumbers, min, max) => {
	const randomNumber = getRandomInt(min, max + 1)
	if (arrayNumbers.includes(randomNumber)) {
		return checkNumber(arrayNumbers, min, max)
	} else {
		return randomNumber
	}
}

const generate = (count, min, max) => {
	const numbers = []
	for (let i = 0; i < count; i++) {
		numbers.push(checkNumber(numbers, min, max))
	}
	return numbers
}

export const generateRandomNumbers = () => ({
	firstField: generate(8, 1, 19),
	secondField: generate(1, 1, 2),
})
