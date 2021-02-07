import React from "react";
import store from '../store';
import { changeValue, addItem, deleteItem, initList } from "../actions/actionCreator.js";
import axios from 'axios';
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = store.getState();
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState(store.getState());
        });
        axios.get("/api/initList.json").then(res=>{
            if(res.status===200){
                const action = initList(res.data);
                store.dispatch(action);
            }
        })

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