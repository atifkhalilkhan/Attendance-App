import { createSlice } from "@reduxjs/toolkit";

const instSlice = createSlice({
    name: "inst",
    initialState: {
        instName: "SMIT",
        totalStudent: 0
    },
    reducers: {
        updateStudentCount: (a, b) => {
            a.totalStudent = b.payload
        }
    }
})

export const { updateStudentCount } = instSlice.actions
export default instSlice.reducer