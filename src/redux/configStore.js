import { configureStore } from "@reduxjs/toolkit";
import gheSlice from "./gheSlice";

export const store = configureStore({
    reducer: {
        hoTen: () => {
            return "nguyen van a";
        },
        gheSlice,
    },
});
