import React from 'react'
import { checkResult, $onFetch, cheackAsyncResult } from '../models/models'
import { useStore } from 'effector-react'

export const Submit = () => {
	const on = useStore($onFetch)

	return (
		<div className="submit" onClick={on ? cheackAsyncResult : checkResult}>
			Показать результат
		</div>
	)
}
