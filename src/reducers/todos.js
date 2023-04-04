import {removeObjectWithId, setCompletionStatus, updateObjectWithId} from "../utils";

const todosReducer = (
    state = [],
    action
) => {
    switch (action.type) {
        case "todos/getAllSuccess":
            return [
                ...action.payload
            ];
        case "todos/getAllFailed":
            return [
                ...state
            ];
        case "todos/add":
            return [
                ...state,
                action.payload];
        case "todos/delete":
            return [...removeObjectWithId(state, action.payload)]
        case "todos/edit":
            const {id, updatedTitle, updatedDate} = action.payload;
            const updatedState = updateObjectWithId(state, id, {id, title: updatedTitle, date: updatedDate})
            return [...updatedState];
        case "todos/complete":
            return [...setCompletionStatus(state, action.payload.id, action.payload.isCompleted)];
        default:
            return state;
    }
}


export default todosReducer;