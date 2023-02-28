import { createSlice } from "@reduxjs/toolkit";
import { softSkills } from "../app/data/softSkills";

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: softSkills,
  reducers: {
    toggleElement: (state, action) => {
      const id = action.payload;
      const toggledElement = state.find(elem => elem.id === id);
    }
  }
})

export const selectSoftSkills = (state) => state.toggle;
export const { toggleElement, scrolltoElement } = toggleSlice.actions;

export default toggleSlice.reducer;