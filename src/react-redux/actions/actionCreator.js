import { ADD_ITEM, CHANGE_VALUE, DELETE_ITEM, INIT_LIST, GET_INIT_LIST } from "../../common/actionTypes.js";

export const addItem = ()=>({
    type: ADD_ITEM
});

export const changeValue = (value)=>({
    type: CHANGE_VALUE,
    value
});

export const deleteItem = (key)=>({
    type: DELETE_ITEM,
    key
});

export const initList = (list)=>({
    type: INIT_LIST,
    list
});

