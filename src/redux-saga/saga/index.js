import {takeEvery, put} from 'redux-saga/effects';
import { GET_INIT_LIST } from "../../common/actionTypes.js";
import { initList} from "../actions/actionCreator.js";
import axios from 'axios';
function* getInitList(){
    try{
        const res = yield axios.get("/api/initList.json");
        const action = initList(res.data);
        yield put(action);
    }catch(e){
        console.log("initList.json网络请求失败")
    }
}

function* mySaga(){
    yield takeEvery(GET_INIT_LIST, getInitList);
}
export default mySaga;