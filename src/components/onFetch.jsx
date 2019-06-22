import React from 'react'
import { useStore } from 'effector-react'
import { $onFetch, changeOnFetch } from '../models/models'

export const OnFetch = () => {
	const on = useStore($onFetch)
	return (
		<div className="onFetch" onClick={changeOnFetch}>
			{on ? 'Выключить' : 'Включить'} асинхронный запрос
		</div>
	)
}
