import React from 'react'

import MagickIcon from '../assets/magic-wand.svg'
import { newWinNumbers } from '../models/models'

export const Header = ({ button }) => (
	<div className="header">
		<div className="name">Билет 1</div>
		{button && (
			<img src={MagickIcon} onClick={newWinNumbers} alt="awesome_icon" />
		)}
	</div>
)
