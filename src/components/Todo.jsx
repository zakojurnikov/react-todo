import React from 'react';

import { Task } from './index.js';

import plusSvg from '../assets/plus.svg';

const Todo = () => {
	return (
		<div className="todo">
			<div className="todo__wrapper">
				<div className="todo__form">
					<input className="todo__input form-control" type="text" id="exampleFormControlInput1" placeholder="Что хочешь сделать сегодня?" />
					<input className="todo__add" type="image" src={plusSvg} />
				</div>
				<div className="todo__tasks">
					<Task text="Начало работы" />
				</div>
			</div>
		</div>
	)
}

export default Todo;
