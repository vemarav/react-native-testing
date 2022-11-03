import {createSlice} from '@reduxjs/toolkit';

const reducer = createSlice({
  name: 'reducer',
  initialState: '',
  reducers: {
    updateText: (state, action) => {
      return action.payload;
    },
  },
});

export const {updateText} = reducer.actions;
export default reducer.reducer;
