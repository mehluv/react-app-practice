import React from 'react'
import '../stylesheets/ui.scss'


const decimalToPercent= (decimal) => {
		return ((100*decimal)+"%")
}
const calcKickoutTimeLeft= (days, limit) => {
	return decimalToPercent((limit-days)/limit)
}
export const SwearCount = (props) =>
(
	<div className="swear-count">
		<div className="bible-words">
			<span>{props.bibleWords}</span>
		 </div>
		 <div className="fornication-words">
		 	<span>{props.fornicationWords}</span>
		 </div>
		 <div className="fantastic-words">
		 	<span>{props.fantasticWords}</span>
		 </div>
		 <div>
		 	<span>{calcKickoutTimeLeft((props.bibleWords+props.fornicationWords+props.fantasticWords),props.total)}</span>
		 </div>
	</div>
)