import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SwearCountList } from './components/SwearCountList'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<SwearCountList infractions={
	[
		{
			event: "Frustration at exams",
			date: new Date("1/1/2017"),
			wasBible: true,
			wasFornication: true
		},
		{
			event: "Frustration at God",
			date: new Date("1/8/2017"),
			wasBible: true,
			wasFornication: false
		},
		{
			event: "Frustration at self",
			date: new Date("6/11/2016"),
			wasBible: false,
			wasFornication: true
		}
	]
}
	 />, document.getElementById('root'));

registerServiceWorker();

/*/*
<SwearCount
	total={1000}
	bibleWords={420}
	fornicationWords={69}
	fantasticWords={42}
*/