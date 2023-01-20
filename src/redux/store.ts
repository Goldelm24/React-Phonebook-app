import { configureStore} from '@reduxjs/toolkit';
import { reducer } from './slices/RootsSlice';

export const store = configureStore({
    reducer,
    devTools: true
})