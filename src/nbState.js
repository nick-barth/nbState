class nbState {

	/*
	 * Simple state initialization
	 * --
	 * @param {Object} - Initial State
	 * @param {Function} - Callback function for update events
	 */
	init (initialState, onStateChange) {
		this.state = initialState;
		this.onStateChange = onStateChange || null;
	}

	/*
	 * Returns the state via path or the entire state
	 * --
	 * @return {String} - optional path of state element
	 * @return {object} - State
	 */
	getState (path) {
		return path ? this.state[path] : this.state;
	}

	/*
	 * Sets state and fires optional callback on state change
	 * --
	 * @param {Object} - State updates
	 */
	setState (updates) {
		const prevState = this.state;

		Object.keys(updates).forEach(update => {
			this.state[update] = updates[update];
		});

		this.onStateChange ? this.onStateChange(prevState, this.state) : null;
	}

}

export { nbState as default };


