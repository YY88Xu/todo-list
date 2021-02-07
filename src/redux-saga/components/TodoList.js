import React from "react";
import store from '../store';
import { changeValue, addItem, deleteItem, getInitList } from "../actions/actionCreator.js";

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = store.getState();
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState(store.getState());
        });
        const action = getInitList();
        store.dispatch(action);
    }
    hanldeAdd = ()=>{
        store.dispatch(addItem());
    }
    changeInputValue = (e)=>{
        store.dispatch(changeValue(e.target.value));
    }
    deleteItem = (key)=>{
        store.dispatch(deleteItem(key))
    }
    render(){
        return (
            <div>
                <div><input onChange={this.changeInputValue} value={this.state.inputValue}></input><button onClick={ this.hanldeAdd }>新增</button></div>
                <ul>
                    {
                        this.state.list.map((item, key)=>(
                            <li key={key}>
                                {item}
                                <a onClick={()=>{this.deleteItem(key)}} style={{marginLeft: "20px"}}>delete</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;