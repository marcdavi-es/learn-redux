// a reducer takes in

// 1. the action, and
// 2. a copy of the current state

function postComments(state = [], action) {
	switch (action.type) {
		case 'ADD_COMMENT':
			return [
				...state, {
				text: action.comment,
				user: action.author
			}];
		case 'REMOVE_COMMENT':
			return [
				...state.slice(0,action.i),
				...state.slice(action.i+1)
			];
		default:
			return state;
	}
}

function comments (state = [], action) {
	if (typeof action != undefined) {
		return {
			...state,
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

// and spits out the next state

export default comments;
