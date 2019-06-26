import React from 'react'
import { useStore } from 'effector-react'

export const SelectedArea = ({
	$areas,
	$selectedAreas,
	onSelect,
	number,
	text,
}) => {
	const areas = useStore($areas)
	const selectedAreas = useStore($selectedAreas)

	return (
		<div className="areas">
			<div className="header">
				<strong>Поле {number}</strong>
				<span>{text}</span>
			</div>
			{areas.map((area, index) => (
				<div
					key={index}
					className={`area ${selectedAreas.includes(area) && 'area_active'}`}
					onClick={() => onSelect(area)}
				>
					{area}
				</div>
			))}
		</div>
	)
}
