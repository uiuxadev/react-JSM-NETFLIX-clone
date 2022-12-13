import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
    //   console.log(action.payload);
      state.genreOrCategoryName = action.payload;
    //   state.searchQuery = '';
    },
    // searchMovie: (state, action) => {
    //   state.searchQuery = action.payload;
    // },
  },
});

// export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;
export const { selectGenreOrCategory } = genreOrCategory.actions;
export default genreOrCategory.reducer;
