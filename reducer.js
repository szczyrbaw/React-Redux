import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users';

const app = combineReducers({
	comments,
	users
});




//const initialState = {
//    comments: [],
//    users: []
//};
// function reducer(state = initialState, action) {
// 	switch(action.type) {
// 		case ADD_COMMENT:
// 			return Object.assign({}, state, {
// 				comments: [
// 				{
// 					id: action.id,
// 					text: action.text
// 					votes: 0
// 				}
// 				, ...state]
// 			})
// 		case REMOVE_COMMENT:
// 			return Object.assign({}, state, {
// 				comments: state.comments.filter(comment => comment.id !== action.id)
// 			});
// 		case EDIT_COMMENT:
// 			return Object.assign({}, state, {
// 				comments: state.comments.map(comment => comment.id === action.id)
// 			});
// 		default:
// 			return state;
// 	}
// }