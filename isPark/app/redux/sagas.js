import { takeLatest, takeEvery, call, put, select, delay } from 'redux-saga/effects';
import * as $ from './actions';
import { apiUrl,} from '../config/'
import axios from 'axios';



function* handler() {
    yield takeLatest($.GET_PARK, FUNC_GET_PARK);
 

}

function* FUNC_GET_PARK(){
    try {
        yield put ({
            type:$.GET_PARK_REQUEST
        })
        const response = yield axios.post(apiUrl)
       
        if(response.data.status==0){
            yield put({
                type:$.GET_PARK_REQUEST_FAILURE,
                ERROR:response
            })
        }
        else{
            yield put({
                type:$.GET_PARK_REQUEST_SUCCESS,
                PARK:response.data
            })
        }
    } catch (error) {
        yield put({
            type:$.GET_PARK_REQUEST_FAILURE,
            ERROR:error
        })
    }
    finally{
        yield put({
            type:$.GET_PARK_REQUEST_END
        })
    }
}




export { handler };