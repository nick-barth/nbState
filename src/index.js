import nbState from './nbState.js';
import $ from 'jquery';

const state = new nbState();

const initialState = {
	todo: [],
	completed: []
};

state.init(initialState, handleStateChange.bind(this));


/*
* Callback
* --
*/
function handleStateChange () {
	const currentState = state.getState();
	const container = $('.todo__list');

	currentState.todo.forEach(todo => {
		container.append(
			`<li class="todo__list-item">
				<div class="todo__list-item-text">
					${todo.text}
				</div>
			</li>`
		);
	});
}



/*
* Handles addition of a todo item
* --
*/
function handleAdd () {
	const currentState = state.getState();
	const newTodo = {
		urgency: 0,
		text: $('#todo-input').val()
	};

	currentState.todo.push(newTodo);
	state.setState({
		todo: currentState.todo
	});
}

$('#todo-submit').click(handleAdd.bind(this));

