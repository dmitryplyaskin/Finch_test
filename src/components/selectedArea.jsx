import React from 'react'
import { useStore } from 'effector-react'

export const SelectedArea = ({ $areas, onSelect, number, text }) => {
	const areas = useStore($areas)

	return (
		<div className="areas">
			<div className="header">
				<strong>Поле {number}</strong>
				<span>{text}</span>
			</div>
			{areas.map((area, index) => (
				<div
					key={index}
					className={`area ${area.selected && 'area_active'}`}
					onClick={() => onSelect(area.name)}
				>
					{area.name}
				</div>
			))}
		</div>
	)
}
