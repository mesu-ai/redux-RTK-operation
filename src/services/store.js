import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { serviceAPIs } from './serviceAPIs'


export const store = configureStore({
  reducer: {
   
    [serviceAPIs.reducerPath]: serviceAPIs.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serviceAPIs.middleware),
})

setupListeners(store.dispatch)