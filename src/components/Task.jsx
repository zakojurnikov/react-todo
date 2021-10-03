import React from 'react';
import trashSvg from '../assets/trash.svg';

const Task = ({ text, crossed }) => {
	return (
		<div className="task">
			<div className="task__content">
				<input className="task__button form-check-input" type="checkbox" value="" id="flexCheckDefault" />
				<p className={`task__text ${crossed ? 'task__text_crossed' : ''}`}>
					{text}
				</p>
			</div>
			<input type="image" className="task__remove" src={trashSvg} />
		</div>
	)
}

export default Task;
