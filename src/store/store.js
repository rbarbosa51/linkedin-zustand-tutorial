import { create } from "zustand";

export default create((set) => ({
    count: 0,
    increment:
     (incrementAmount) => set((state) => ({count: state.count + incrementAmount})),
    decrement: 
    (decrementAmount) => set((state) => ({count: state.count - decrementAmount}))
}));