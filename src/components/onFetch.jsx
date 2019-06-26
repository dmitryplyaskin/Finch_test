import React from 'react'
import { useStore } from 'effector-react'
import { $isFetch, changeIsFetch } from '../models'

export const OnFetch = () => {
	const on = useStore($isFetch)
	return (
		<div className="onFetch" onClick={changeIsFetch}>
			{on ? 'Выключить' : 'Включить'} асинхронный запрос
		</div>
	)
}
