import { configureStore } from '@reduxjs/toolkit';
import sessionStatusReducer from './slices/sessionStatusSlice';
import prescriptionReviewReducer from './slices/prescriptionReviewSlice';

const store = configureStore({
  reducer: {
    sessionStatus: sessionStatusReducer,
    prescriptionReview: prescriptionReviewReducer
  },
});

export default store;