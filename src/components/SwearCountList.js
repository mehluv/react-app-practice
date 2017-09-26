import React from 'react'
import { SwearCountRow } from './SwearCountRow'

export const SwearCountList = ({infractions}) => (
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Instigating Event</th>
				<th>Divinity</th>
				<th>Vogonity</th>
			</tr>
		</thead>
		<tbody>
			{infractions.map((infraction, i) => 
				<SwearCountRow key = {i}
				event={infraction.event}
				date={infraction.date}
				divinity={infraction.wasBible}
				vogonity={infraction.wasFornication} />
				)}
		</tbody>
	</table>
	) 