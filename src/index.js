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

	$('.todo__list-item').remove();

	// Appends items
	currentState.todo.forEach((todo, index) => {
		container.append(
			`<li class="todo__list-item">
				<div class="todo__list-item-text">
					${todo.text}
				</div>
				<div class="todo__list-item-done" data-id='${index}'>
					Done!
				</div>
			</li>`
		);
	});

	// Binds addition to form
	$('.todo__list-item-done').each(function () {
		$(this).on('click', function () {
			handleDone.call(this, $(this).data('id'));
		});
	});
}


/*
* Handles completion of a todo item
* --
*/
function handleDone (id) {

	const currentTodo = state.getState('todo');
	const updates = currentTodo.filter((todo, index) => index !== id);

	state.setState({
		todo: updates
	});

}

/*
* Handles addition of a todo item
* --
*/
function handleAdd () {

	const currentState = state.getState();
	const newTodo = {
		urgency: 0, // todo: add urgency colours
		text: $('#todo-input').val(),
		completed: false // line-strike instead of removal
	};

	currentState.todo.push(newTodo);

	state.setState({
		todo: currentState.todo
	});

	$('#todo-input').val('');
}


// Binds addition to form
$('#todo__form').submit(ev => {
	ev.preventDefault();
	handleAdd.call(this);
});
