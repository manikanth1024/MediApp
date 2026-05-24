import {createSlice} from'@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    status: '',
    prescriptionResult: {}
};

const sessionStatusSlice = createSlice({
    name: 'sessionStatus',
    initialState,
    reducers: {
        setLoadingState: (state, action) => {
            state.isLoading = action.payload
        },
        updateSessionStatus: (state, action) => {
            state.status = action.payload
        },
        savePrescriptionResult: (state, action) => {
            state.prescriptionResult = action.payload
        }
    }
});

export const {savePrescriptionResult, updateSessionStatus, setLoadingState} = sessionStatusSlice.actions;

export default sessionStatusSlice.reducer;
