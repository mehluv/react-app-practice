import React from 'react'

export const SwearCountRow = ({ event, date, wasBible, wasFornication }) => (
	<tr>
		<td>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</td>
		<td>{event}</td>
		<td>{!(wasBible && "Cursed")&&"Blessed"}</td>
		<td>{(wasFornication)?"Virgin":"Still a virgin"}</td>
	</tr>
)
