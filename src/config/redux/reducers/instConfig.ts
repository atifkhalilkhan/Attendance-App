import { createSlice } from "@reduxjs/toolkit";

const instSlice = createSlice({
    name: "instConfig",
    initialState: {
        instName: 'SMIT',
        sessionYear: "2025-2026",
        totalStudents: 0
    },
    reducers: {}
})

export default instSlice.reducer