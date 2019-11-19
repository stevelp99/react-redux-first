import {INCREMENT,DECREMENT,ZERO} from "./actionTypes";

export default function reducer(state=0,action){
    switch(action.type){
        case INCREMENT:
            return state+1;
        case DECREMENT:
            return state-1;
        case ZERO:
            return state=0;
        default:
            return state;
    }
}
