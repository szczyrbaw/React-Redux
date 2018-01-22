import { ADD_COMMENT } from './actions';
import { REMOVE_COMMENT } from './actions';
import { EDIT_COMMENT } from './actions';
import { THUMB_UP_COMMENT } from './actions';
import { THUMB_DOWN_COMMENT } from './actions';


export default function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text
                votes: 0
            }
            , ...state.comments];
        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return state.comments.filter(comment => {
                    if (comment.id === action.id) {
                        comment.text = action.text;
                        return comment;
                    }
            });
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votes: comment.votes + 1}
                }
            });

        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votes: comment.votes - 1}
            };
        default:
            return state;
    }
}
