// a reducer takes in

// 1. the action, and
// 2. a copy of the current state

function	posts(state = [], action) {
	console.log('The post will change');
	// console.log(state,action);
	return state;
}

// and spits out the next state

export default posts;
