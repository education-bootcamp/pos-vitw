import {createSlice} from '@reduxjs/toolkit';

interface ManageCalcState{
    value:number;
}

const initialState:ManageCalcState={
    value:0
}

const manageSlice = createSlice({
    name:'calculator',
    initialState,
    reducers:{}
});
export default manageSlice.reducer;
