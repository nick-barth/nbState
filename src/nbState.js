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
	 * Returns the state
	 * --
	 * @return {object} - State
	 */
	getState () {
		return this.state;
	}

	/*
	 * Sets state and fires optional callback on state change
	 * --
	 * @param {Object} - State updates
	 */
	setState (updates) {
		Object.keys(updates).forEach(update => {
			this.state[update] = updates[update];
		});

		this.onStateChange ? this.onStateChange() : null;
	}

}

export { nbState as default };


