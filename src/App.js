import React from 'react'
import { SelectedArea } from './components/selectedArea'
import {
	$firstArea,
	$secondArea,
	$firstAreaSelect,
	$secondAreaSelect,
	changeFirstAreaSelect,
	changeSecondAreaSelect,
	$result,
} from './models'
import { Submit } from './components/submit'
import { Header } from './components/header'
import { useStore } from 'effector-react'
import { OnFetch } from './components/onFetch'

const App = () => {
	const result = useStore($result)
	const resultsPage = [
		{
			name: 'error',
			text: 'Упсс... Наш сервер не отвечает',
		},
		{
			name: 'win',
			text: 'Ого, вы выиграли! Поздравляем!',
		},
		{
			name: 'fail',
			text: 'Упсс... Вы проиграли, повезет в следующий раз...',
		},
	]

	return (
		<div className="app">
			<Header button={result === 'start'} />
			{resultsPage.map((v, i) =>
				result === v.name ? (
					<div key={i} className="resultText">
						{v.text}
					</div>
				) : null
			)}
			{result === 'start' && (
				<>
					<SelectedArea
						number={1}
						text={'Отметьте 8 чисел.'}
						onSelect={changeFirstAreaSelect}
						$selectedAreas={$firstAreaSelect}
						$areas={$firstArea}
					/>
					<SelectedArea
						number={2}
						text={'Отметьте 1 число.'}
						onSelect={changeSecondAreaSelect}
						$selectedAreas={$secondAreaSelect}
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
