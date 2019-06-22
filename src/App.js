import React from 'react'
import { SelectedArea } from './components/selectedArea'
import {
	$firstArea,
	$secondArea,
	selectFirstArea,
	selectSecondArea,
	$result,
} from './models/models'
import { Submit } from './components/submit'
import { Header } from './components/header'
import { useStore } from 'effector-react'
import { OnFetch } from './components/onFetch'

const App = () => {
	const result = useStore($result)

	return (
		<div className="app">
			<Header button={result === 'start'} />
			{result === 'error' && (
				<div className="resultText">Упсс... Наш сервер не отвечает</div>
			)}
			{result === 'win' && (
				<div className="resultText">Ого, вы выиграли! Поздравляем!</div>
			)}
			{result === 'fail' && (
				<div className="resultText">
					Упсс... Вы проиграли, повезет в следующий раз...
				</div>
			)}
			{result === 'start' && (
				<>
					<SelectedArea
						number={1}
						text={'Отметьте 8 чисел.'}
						onSelect={selectFirstArea}
						$areas={$firstArea}
					/>
					<SelectedArea
						number={2}
						text={'Отметьте 1 число.'}
						onSelect={selectSecondArea}
						$areas={$secondArea}
					/>
					<Submit />
					<OnFetch />
				</>
			)}
		</div>
	)
}

export default App
