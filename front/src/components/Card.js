import React, { useState } from 'react';
import Add from './Add';

function Card({list, addTask}) {
	
	return(
		
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			
			<div>
				<h2>{list.title}</h2>
				<p>{list.item1}</p>
				<p>{list.item2}</p>
				<p>{list.item3}</p>
				 <Add addTask={addTask} />
			</div>
		</div>
	);
}

export default Card;