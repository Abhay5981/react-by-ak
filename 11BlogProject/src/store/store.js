import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';


const store = configureStore({
    reducer:{
        auth: authSlice,
        // TODO add more slice for more post
    }
})

export default store;