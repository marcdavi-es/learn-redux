// a reducer takes in

// 1. the action, and
// 2. a copy of the current state

function	posts(state = [], action) {
	switch (action.type) {
		case 'INCREMENT_LIKES':
			console.log('Incrementing likes :)');
			const i = action.index;
			return [
				...state.slice(0,i),
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i+1)
			]
		default:
			return state;
	}
}

// and spits out the next state

export default posts;
