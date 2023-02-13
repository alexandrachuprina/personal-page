import { createSlice } from "@reduxjs/toolkit";
import { softSkills } from "../app/data/softSkills";

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: softSkills,
  reducers: {
    toggleElement: (state, action) => {
      const id = action.payload;
      const toggledElement = softSkills.filter(elem => elem.id === id);
      toggledElement.toggle = !toggledElement.toggle;
    }
  }
})

export const { toggleElement } = toggleSlice.actions;

export default toggleSlice.reducer;