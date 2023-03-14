import { configureStore } from "@reduxjs/toolkit";
import profile_reducer from "./reducers/profile_reducer";

export const store = configureStore({
    reducer: {
        profile: profile_reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch