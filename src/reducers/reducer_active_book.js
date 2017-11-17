//reducer_active_book.js

// all reducers get 2 arguments, state and action


// State argument is not appliaction state, only the state 
// this reducer is responsible for
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
			// return fresh object
			return action.payload;
	}

	return state;
}