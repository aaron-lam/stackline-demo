import { configureStore } from "@reduxjs/toolkit";
import productInfoReducer from "./productInfoSlice";
export const store = configureStore({
  reducer: {
    productInfo: productInfoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
