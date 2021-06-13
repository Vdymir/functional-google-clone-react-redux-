import { configureStore } from '@reduxjs/toolkit';
import textReducer from '../features/textSlice'

export default configureStore ({

    reducer: {
        text: textReducer,
    },
})