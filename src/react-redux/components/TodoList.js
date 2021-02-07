import React from "react";
import { changeValue, addItem, deleteItem, initList } from "../actions/actionCreator.js";

import {connect} from "react-redux";

const TodoList = (props)=> (
    <div>
        <div><input onChange={props.changeInputValue} value={props.inputValue}></input><button onClick={ props.hanldeAdd }>新增</button></div>
        <ul>
            {
                props.list.map((item, key)=>(
                    <li key={key}>
                        {item}
                        <a onClick={()=>{props.deleteItem(key)}} style={{marginLeft: "20px"}}>delete</a>
                    </li>
                ))
            }
        </ul>
    </div>
)

const mapStateToProps = (state)=>({
    inputValue: state.inputValue,
    list: state.list
})

const mapDispatchToProps = (dispatch) => ({
    hanldeAdd: ()=>{
        dispatch(addItem());
    },
    changeInputValue:  (e)=>{
        dispatch(changeValue(e.target.value));
    },
    deleteItem: (key)=>{
        dispatch(deleteItem(key))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);