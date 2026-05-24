import {createSlice} from'@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    reviewResult: {}
};

const prescriptionReviewSlice = createSlice({
    name: 'prescriptionReview',
    initialState,
    reducers: {
        setLoadingState: (state, action) => {
            state.isLoading = action.payload
        },
        setPrescriptionReviewResult: (state, action) => {
            state.reviewResult = action.payload
        }
    }
});

export const {setLoadingState, setPrescriptionReviewResult} = prescriptionReviewSlice.actions;

export default prescriptionReviewSlice.reducer;
