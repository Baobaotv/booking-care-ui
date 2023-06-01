import { configureStore } from '@reduxjs/toolkit';
import { messageReducer } from './message';

const store = configureStore({
    reducer: {
        mess: messageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export default store;
