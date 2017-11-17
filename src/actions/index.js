// src/actions/index.js 

export function selectBook(book) {
	// selectBook is an ActionCreator, it needs
	// to return an action, an object w/ a type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
		// payload describes the action being undertaken
	}
}