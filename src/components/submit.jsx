import React from 'react'
import { checkResult, $isFetch, cheackAsyncResult } from '../models'
import { useStore } from 'effector-react'

export const Submit = () => {
	const on = useStore($isFetch)

	return (
		<div className="submit" onClick={on ? cheackAsyncResult : checkResult}>
			Показать результат
		</div>
	)
}
