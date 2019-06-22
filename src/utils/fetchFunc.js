import { sleep } from './sleep'
const goFetch = data =>
	fetch('/finch-test', {
		method: 'POST',
		body: data,
	})

export const fetchFunc = (data, isWon) => {
	let count = 0
	const onFetch = async () => {
		const result = await goFetch(data)
		if (count === 2) {
			return 'error'
		}
		if (result.status === 200) {
			return isWon
		}
		if (result.status !== 200) {
			count += 1
			await sleep(2000)
			return onFetch()
		}
	}
	return onFetch()
}
