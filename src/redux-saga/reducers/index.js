import { ADD_ITEM, CHANGE_VALUE, DELETE_ITEM, INIT_LIST } from "../../common/actionTypes.js"
const defaultState = {
    inputValue: "",
    list: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action)=>{
    if(action.type === CHANGE_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }
    if(action.type === DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.key, 1);
        return newState;
    }
    if(action.type === INIT_LIST){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.list;
        return newState;
    }
    return state;
}